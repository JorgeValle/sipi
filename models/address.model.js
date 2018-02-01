const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * The schema for an address, meant to be used as a subdocument
 */
let addressSchema = new Schema({
  street: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  }
});

// indexing the fields to be used for search
addressSchema.index({
  city: 'text',
  country: 'text'
});

// exporting for use in other schemas
module.exports = mongoose.model('Address', addressSchema);