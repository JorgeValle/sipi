const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// importing models to use as subdocuments
const addressSchema = require('mongoose').model('Address').schema;
const coordinatesSchema = require('mongoose').model('Coordinates').schema;

/**
 * The schema for a place
 */
let placeSchema = new Schema({
  address: addressSchema,
  category: {
    name: {
      type: String,
      required: true
    },
    subcats: {
      type: [String]
    }
  },
  claimed: {
    type: Boolean,
    required: true,
    default: false
  },
  createdDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  comments: {
    type: Number
  },
  coordinates: coordinatesSchema,
  email: {
    type: String
  },
  hits: {
    type: Number
  },
  image: {
    type: String,
    default: 'http://via.placeholder.com/1600x900'
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  lastModified: {
    type: Date
  },
  locked: {
    type: Boolean,
    required: true,
    default: false
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  ownerId: {
    type: Number
  },
  published: {
    type: Boolean,
    required: true,
    default: false
  },
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  slug: String
});

// indexing the fields to be used for search
placeSchema.index({
  name: 'text'
});

// compile schema to bson, telling mongo to use 'places' collection
mongoose.model('Place', placeSchema, 'places');