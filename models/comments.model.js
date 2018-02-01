const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hash: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  }
});

// compile schema to bson, telling mongo to use 'users' collection
mongoose.model('Comment', commentSchema, 'comments');