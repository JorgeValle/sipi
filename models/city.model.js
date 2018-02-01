const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let citySchema = new Schema({
  countryId: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
});

citySchema.index({
  name: 'text'
});

// compile schema to bson, telling mongo to use 'users' collection
mongoose.model('City', citySchema, 'cities');