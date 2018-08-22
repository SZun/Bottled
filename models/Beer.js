import mongoose from 'mongoose';
const { Schema } = mongoose;

const beerSchema = new Schema({
  beerName: {
    type: String,
    required: true
  },
  ABV: {
    type: String,
    required: false
  },
  IBU: {
    type: String,
    required: false
  },
  style: {
    type: String,
    required: false
  },
  ounces: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  breweryId: {
    type: Schema.Types.ObjectId,
    ref: 'Brewery'
  }
});

const Beer = mongoose.model('beer', beerSchema);

export default Beer;
