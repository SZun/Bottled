import mongoose from 'mongoose';
import express from 'express';
const router = express.Router();
import passport from 'passport';
import Beer from '../models/Beer';

//Import Validation
import validate from '../validation/comment';

// @route POST /api/beer
// @desc Find or add beer to DB
// @access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { name, description, image_url } = req.body;
      let beer = await Beer.findOne({ name, image_url, description });
      if (beer) {
        res.send(beer);
      } else {
        beer = await new Beer({
          name,
          description,
          image_url
        });
        await beer.save();
        res.send(beer);
      }
    } catch (err) {
      res.status(400).send(`${err.message}`);
      // res.status(400).send({ swr: 'Something went wrong' });
    }
  }
);

// @route POST /api/beer
// @desc Create a comment
// @access Private
router.post(
  '/comment/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { error } = validate(req.body);

      if (error) {
        const errors = {};
        error.details.map(err => {
          const errorVal = err.message.replace(/"/g, '');
          const key = errorVal.split(' ')[0];
          switch (key) {
            case 'text':
              errors[key] = 'Comment can not be empty';
              break;
            default:
              return;
          }
        });
        console.log(errors);
        return res.status(400).json(errors);
      }

      const { text } = req.body;
      const userName = req.user.name;
      const _user = req.user._id;

      const beer = await Beer.findById(req.params.id);
      const newComment = {
        text,
        userName,
        _user
      };
      beer.comments.unshift(newComment);
      await beer.save();

      res.send(beer);
    } catch (err) {
      res.status(400).send({ swr: 'Something went wrong' });
    }
  }
);

// @route GET /api/beer
// @desc Get beer
// @access Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const beer = await Beer.findById(req.params.id);
      res.send(beer);
    } catch (err) {
      res.status(400).send({ swr: 'Something went wrong' });
    }
  }
);

// @route DELETE /api/beer
// @desc Delete a comment
// @access Private
router.delete(
  '/comment/:id/:comment_id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      let beer = await Beer.findById(req.params.id);
      // Check to see if comment exists
      if (
        beer.comments.filter(
          comment => comment._id.toString() === req.params.comment_id
        ).length === 0
      ) {
        return res
          .status(404)
          .json({ commentnotexists: 'Comment does not exist' });
      }

      // Get remove index
      const removeIndex = beer.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

      // Splice comment out of array
      beer.comments.splice(removeIndex, 1);

      await beer.save();
      res.send(beer);
    } catch (err) {
      res.status(400).send({ commentNotFound: 'Comment not found' });
    }
  }
);

export default router;
