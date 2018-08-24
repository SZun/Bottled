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
      const { name, description, image_url } = req.body;
      const _user = req.user._id;
      let order = await new Order({
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
  '/checkout',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const errors = {};

      const { error } = validateCheckOut(req.body);
      if (error) {
        error.details.map(err => {
          const errorVal = err.message.replace(/"/g, '');
          const key = errorVal.split(' ')[0];
          switch (key) {
            case 'creditCard':
              errors[key] = 'Input the 16 digits on your card';
              break;
            case 'month':
              errors[key] = 'example 11/19';
              break;
            case 'year':
              errors[key] = 'add the year the card expires';
              break;
            case 'securityCode':
              errors[key] = 'input the three digits on your card';
              break;
            case 'name':
              errors[key] = 'input the name of the card holder';
              break;
            case 'country':
              errors[key] = 'add the country of the card holder';
              break;
            case 'zipCode':
              errors[key] = 'add correct zip code 5 - 9';
              break;
            default:
              return;
          }
        });
        return res.status(400).json(errors);
      }

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
