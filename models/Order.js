import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image_url: {
    type: String,
    required: true,
    trim: true
  },
  _user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  purchased: {
    type: Boolean,
    default: false
  }
});

const Order = mongoose.model('order', orderSchema);

export default Order;
