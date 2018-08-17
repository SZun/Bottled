const { Strategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
import User from '../models/User;
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new Strategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.id);
        user ? done(null, user) : done(null, false);
      } catch (err) {
        console.log(err.message);
      }
    })
  );
};
