import mongoose from "mongoose";
const { Schema } = mongoose;

var BrewerySchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});


const Brewery = mongoose.model('brewery', userSchema);

export default Brewery;
