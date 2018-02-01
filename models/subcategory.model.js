const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subcategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  parentId: {
    type: Number
  }
});

subcategorySchema.index({
  name: 'text'
});

// compile schema to bson, telling mongo to use 'subcategories' collection
mongoose.model('Subcategory', subcategorySchema, 'subcategories');