import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 50
  },
  birthDate: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    maxlength: 8
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 1024
  },
  state: {
    type: String,
    minlength: 2,
    maxlength: 2,
    required: true,
    trim: true
  },
  city: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
    trim: true
  },
  streetAddress: {
    type: String,
    minlength: 6,
    maxlength: 100,
    required: true,
    trim: true
  },
  zipCode: {
    type: Number,
    minlength: 5,
    maxlength: 5,
    required: true,
    trim: true
  }
});

const User = mongoose.model('users', userSchema);

export default User;
