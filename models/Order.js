import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
  beer: {
    name: String,
    description: String,
    imageUrl: String,
    price: 4.99
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
    maxlength: 10
  },
  status: {
    type: String,
    trim: true,
    default: false
  }
});

const Order = mongoose.model('order', orderSchema);

export default Order;
