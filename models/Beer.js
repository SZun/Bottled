const mongoose = require('mongoose');
const { Schema } = mongoose;

const beerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  image_url: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  comments: [
    {
      _user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true,
        trim: true
      },
      userName: {
        type: String,
        required: true,
        trim: true
      }
    }
  ]
});

const Beer = mongoose.model('beerreview', beerSchema);

export default Beer;
