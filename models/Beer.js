import mongoose, { Schema } from 'mongoose';

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
      }
    }
  ]
});

const Beer = mongoose.model('beers', beerSchema);

export default Beer;
