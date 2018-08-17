import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import mongoose from 'mongoose';
import keys from '../config/keys';
import jwt from 'jsonwebtoken';
import passport from 'passport';

const router = express.Router();

import { validateLogin, validateSignUp } from '../validation/users';

router.post('/signup', async (req, res) => {
  const errors = {};

  const { error } = validateSignUp(req.body);
  if (error && error.details[0].message.split(' ')[0] === `"email"`) {
    errors.email = 'Invalid Email Address';
    return res.status(400).json(errors);
  }
  if (error) return res.status(400).send(error.details[0].message);

  const { name, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    errors.email = 'Email already exists';
    return res.status(400).json(errors);
  } else {
    let user = new User({
      name,
      email,
      password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, async (err, hash) => {
        try {
          user.password = hash;
          user = await user.save();
          res.json(user);
        } catch (err) {
          console.log(`${err.message}`);
        }
      });
    });
  }
});

router.post('/login', async (req, res) => {
  const errors = {};

  const { error } = validateLogin(req.body);

  if (error && error.details[0].message.split(' ')[0] === `"email"`) {
    errors.email = 'Invalid Email Address';
    return res.status(400).json(errors);
  }

  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  // Find user by email
  let user = await User.findOne({ email });
  if (!user) {
    errors.email = 'User not found!';
    return res.status(404).json(errors);
  }
  // Check Password
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    // User Matched
    const { id, name } = user;
    const payload = { id, name };
    // Sign Token
    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
      res.json({
        sucess: true,
        token: 'Bearer ' + token
      });
    });
  } else {
    errors.password = 'Password incorrect';
    return res.status(400).json(errors);
  }
});

router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    console.log(req.user);
    let user = await User.findById(req.user._id);
    res.status(404).send(user);
  }
);

export default router;
