import mongoose from 'mongoose';
const { Schema } = mongoose;

var brewerySchema = new Schema({
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  }
});

const Brewery = mongoose.model('brewery', brewerySchema);

export default Brewery;
