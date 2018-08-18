import passport from 'passport';

const auth = (req, res, next) => {
  passport.authenticate('jwt', { session: false });
  next();
};

export default auth;
