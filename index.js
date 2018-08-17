import express from 'express';
const app = express();
import mongoose from 'mongoose';
import mongooseConnection from './startup/connection';

mongooseConnection(mongoose);

app.listen(5000, console.log('Listening on port 5000'));
