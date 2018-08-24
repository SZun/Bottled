import mongoose from 'mongoose';
const { Schema } = mongoose;

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
  price: {
    type: Number,
    required: true,
    default: 4.99
  },
  _user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  shippingStatus: {
    type: Boolean,
    default: false
  },
  purchased: {
    type: Boolean,
    default: false
  }
});

const Order = mongoose.model('order', orderSchema);

export default Order;
