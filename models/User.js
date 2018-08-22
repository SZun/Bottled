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
  dateofbirth: {
    type: Date,
    required: true
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
  address: {
    state: String,
    city: String,
    street: String,
    houseNumber: String
  }
});

const User = mongoose.model('users', userSchema);

export default User;
