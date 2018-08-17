import express from 'express';
const app = express();
import mongoose from 'mongoose';
const PORT = process.env.PORT || 5000;
import bodyParser from 'body-parser';

import mongooseConnection from './startup/connection';
import bodyParserMiddleware from './startup/bodyParser';

import userRoutes from './routes/users';

mongooseConnection(mongoose);
bodyParserMiddleware(app);

app.use('/api/users', userRoutes);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
