import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import mongoose from 'mongoose';
import keys from '../config/keys';
import jwt from 'jsonwebtoken';
import passport from 'passport';

const router = express.Router();

// Add in validation Logic
import { validateLogin, validateSignUp } from '../validation/users';

// @route POST api/users/signup
// @desc Register user for an account
// @access Public
router.post('/signup', async (req, res) => {
  // Instantiate Errors Object
  const errors = {};
  // Validate user input and set errors
  const { error } = validateSignUp(req.body);
  if (error) {
    error.details.map(err => {
      const errorVal = err.message.replace(/"/g, '');
      const key = errorVal.split(' ')[0];
      switch (key) {
        case 'name':
          errors[key] = 'name must be between 5-50 characters';
          break;
        case 'email':
          errors[key] = 'email is invalid';
          break;
        case 'password':
          errors[key] =
            'must have 8-26 characters, lowercase, uppercase, numeric and symbol';
          break;
        case 'confirmPassword':
          errors[key] = 'passwords must match';
          break;
        default:
          return;
      }
    });
    return res.status(400).json(errors);
  }

  const { name, email, password, confirmPassword } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    errors.email = 'Email already exists';
    return res.status(400).json(errors);
  } else {
    let user = new User({
      name,
      email,
      password,
      confirmPassword
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

// @route POST api/users/login
// @desc Log user in to their account
// @access Public
router.post('/login', async (req, res) => {
  const errors = {};

  // Validate user input and set errors
  const { error } = validateLogin(req.body);

  if (error) {
    const errors = {};
    error.details.map(err => {
      const errorVal = err.message.replace(/"/g, '');
      const key = errorVal.split(' ')[0];
      switch (key) {
        case 'email':
          errors[key] = 'Email is invalid';
          break;
        case 'password':
          errors[key] =
            'Password must have 8-26 characters, lowercase, uppercase, numeric and symbol';
          break;
        default:
          return;
      }
    });
    return res.status(400).json(errors);
  }

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
    const { id, name, email } = user;
    const payload = { id, name, email };
    // Sign Token
    jwt.sign(
      payload,
      keys.secretOrKey,
      { expiresIn: 3600 * 24 },
      (err, token) => {
        res.json({
          sucess: true,
          token: 'Bearer ' + token
        });
      }
    );
  } else {
    errors.password = 'Password not found';
    return res.status(400).json(errors);
  }
});

// @route GET api/users/login
// @desc Testing auth and giving user access to their account
// @access Private
router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id).select('name email');
      res.send(user);
    } catch (err) {
      res.status(401).send('Bad Request');
    }
  }
);

export default router;
