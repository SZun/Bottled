import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema({
  beerName: {
    type: String,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    maxlength: 10
  },
  status: {
    type: String,
    required: false
  }
});

const Order = mongoose.model('order', userSchema);

export default Order;
