const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pageSchema = new Schema({
  body: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  lastModified: {
    type: Date
  },
  slug: {
    type: String
  },
  title: {
    type: String,
    required: true,
    unique: true
  }
});

pageSchema.index({
  body: 'text',
  title: 'text'
});

// compile schema to bson, telling mongo to use 'pages' collection
mongoose.model('Page', pageSchema, 'pages');