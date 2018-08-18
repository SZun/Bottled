import mongoose from "mongoose";
const { Schema } = mongoose;

const BeerSchema = new Schema({
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
  breweryId: {
      type: Schema.Types.ObjectId,
      ref: "Brewery"
  }

});

const Beer = mongoose.model('beer', userSchema);

export default Beer;
