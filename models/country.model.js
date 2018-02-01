const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let countrySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  }
});

countrySchema.index({
  name: 'text'
});

// compile schema to bson, telling mongo to use 'users' collection
mongoose.model('Country', countrySchema, 'countries');