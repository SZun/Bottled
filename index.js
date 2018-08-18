import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

const app = express();
const PORT = process.env.PORT || 5000;

import mongooseConnection from './startup/connection';
import bodyParserMiddleware from './startup/bodyParser';
import passportMiddleware from './services/passport';

import userRoutes from './routes/users';

mongooseConnection(mongoose);
bodyParserMiddleware(app);
app.use(passport.initialize());
passportMiddleware(passport);

app.use('/api/users', userRoutes);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
