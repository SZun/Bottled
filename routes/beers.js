import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
//import Beer from '../models/Beer';

// // Route for getting all Articles from the db
// router.get('/', async (req, res) => {
//   const errors = {};
//   try {
//     // Grab every document in the Articles collection
//     const beer = await Beer.find({});
//     // If we were able to successfully find Beers, send them back to the client
//     res.json(beer);
//   } catch (err) {
//     // If an error occurred, send it to the client
//     errors.beers = 'Oops, something went wrong';
//     res.status(404).json(errors);
//   }
// });

export default router;
