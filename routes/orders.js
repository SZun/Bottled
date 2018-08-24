import mongoose from 'mongoose';
import express from 'express';
const router = express.Router();
import passport from 'passport';
import Order from '../models/Order';
import validateCheckOut from '../validation/orders';

//Import Validation
// @route POST /api/orders
// @desc Create orders in database for beers
// @access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const errors = {};
         const {error} = validateCheckOut(req.body);
        const { name, description, imageUrl } = req.body.beer;
        const _user = req.user._id;
        let order = await new Order({
        name,
        description,
        imageUrl,
        _user
      });
      await order.save();
      res.send(order);
    } catch (err) {
      res.status(400).send('Bad Request');
    }
  }
);

//@route GET /api/orders/purchased true
//@desc Get orders in database for beers
//@access Private

router.get(
  '/purchased',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const order = await Order.find({ _user: req.user._id, purchased: true });
      res.send(order);
    } catch (err) {
      res.status(400).send('No orders found');
    }
  }
);

// @route GET /api/orders/notpurchased false
// @desc Get orders in database for beers
// @access Private

router.get(
  '/notpurchased',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const order = await Order.find({ _user: req.user._id, purchased: false });
      res.send(order);
    } catch (err) {
      res.status(400).send('No orders found');
    }
  }
);

// @route PUT /api/orders
// @desc Update orders in database for beers purchased
// @access Private

router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const order = await Order.updateMany(
        { _user: req.user._id },
        { purchased: true },
        { new: true }
      );
      res.send(order);
    } catch (err) {
      res.status(400).send('No orders found');
    }
  }
);

// @route DELETE /api/orders
// @desc Delete orders in database which the user doesnt want to buy
// @access Private

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const order = await Order.findByIdAndRemove(req.params.id);
      res.send(order);
    } catch (err) {
      res.status(400).send('No orders found');
    }
  }
);

export default router;
