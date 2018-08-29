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
      },
      date: {
        type: Date,
        default: Date.now,
        required: true
      },
      rating: [
        {
          email: {
            type: String,
            trim: true,
            required: true,
            unique: true
          },
          stars: {
            type: Number,
            required: true,
            min: 1,
            max: 5
          }
        }
      ]
    }
  ]
});

const Beer = mongoose.model('beerreview', beerSchema);

export default Beer;
