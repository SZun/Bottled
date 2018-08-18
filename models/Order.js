var mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
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
    required: true
  },
  status: {
    type: String,
    required: false
  }
});

// This creates our model from the above schema, using mongoose's model method
var Order = mongoose.model('Order', OrderSchema);

// Export the Order model
module.exports = Order;
