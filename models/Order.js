import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
  beer: {
    name: {
      type: String,
      minlength: 6,
      maxlength: 100,
      required: true,
      trim: true
    },
    description: {
      type: String,
      minlength: 6,
      maxlength: 100,
      required: true,
      trim: true
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      default: 4.99
    }
  },
  user: {
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
  shippingStatus: {
    type: String,
    trim: true,
    default: false
  },
  purchased: {
    type: Boolean,
    default: false
  }
});

const Order = mongoose.model('order', orderSchema);

export default Order;
