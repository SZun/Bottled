import mongoose from 'mongoose';
import express from 'express';
const router = express.Router();
import passport from 'passport';
import beerreview from '../models/BeerReview';

//import validateCheckOut from '../validation/post';

//@route GET /api/beerreviews 
//@desc Get 'Post' in database for beers
//@access Public
router.get(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      try {
        const post = await BeerReview.findbyId(req.params.id);
        res.send(post);
      } catch (err) {
        res.status(400).send('No posts found');
      }
    }
  );
  
//Import Validation
// @route POST /api/beerreview
// @desc Create reviews in database for beers
// @access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { name, description, image_url } = req.body;
      const _user = req.user._id;
      let beerreview = await new BeerReview({
        name,
        description,
        image_url,
        _user
      });
      await order.save();
      res.send(order);
    } catch (err) {
      res.status(400).send(`${err.message}`);
    }
  }
);

// @route DELETE /api/reviews
// @desc Delete reviews in database which the user doesnt want to post
// @access Private

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const beerreview = await BeerReview.findByIdAndRemove(req.params.id);
      res.send(beerreview);
    } catch (err) {
      res.status(400).send('No reviews to delete');
    }
  }
);


export default router;
