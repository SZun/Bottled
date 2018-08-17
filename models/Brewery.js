var mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var BrewerySchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Brewery = mongoose.model('Brewery', BrewerySchema);

// Export the Brewery model
module.exports = Brewery;
