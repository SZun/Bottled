var mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
  beerName: {
    type: String,
    required: true
  },
  ABV: {
    type: String,
    required: false
  },
  IBU: {
    type: String,
    required: false
  },
  style: {
    type: String,
    required: false
  },
  ounces: {
      type: String,
      required: true
  },
  breweryId: {
      type: Schema.Types.ObjectId,
      ref: "Brewery"
  }

});

// This creates our model from the above schema, using mongoose's model method
var Beer = mongoose.model('Beer', BeerSchema);

// Export the Beer model
module.exports = Beer;
