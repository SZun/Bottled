import mongoose from 'mongoose';
// Save a reference to the Schema constructor
import { Schema } from 'mongoose';

var userSchema = new Schema({
   name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 50
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
  preferences: {
    type: [String]
  }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model('users', userSchema);

// Export the User model
export default User;
