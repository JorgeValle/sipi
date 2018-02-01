const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true
  },
  summary: String,
  iconId: String,
  listings: Number,
  filterOptions: [String]
});

// setting the property indexed for search
categorySchema.index({
  name: 'text'
});

// compile schema to bson, telling mongo to use 'users' collection
mongoose.model('Category', categorySchema, 'categories');