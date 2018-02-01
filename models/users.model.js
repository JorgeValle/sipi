const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const metadataSchema = require('../../../../antares_core/models/metadata-part.model');
const titlePartSchema = require('../../../../antares_core/models/title-part.model');
const bodySchema = require('../../../../antares_core/models/body-part.model');
const coordinatesSchema = require('../../../../antares_core/models/coordinates-part.model');

// every time a user visits a place belonging to a category, it gets recorded here
let favoriteCategory = new Schema({
  id: Number,
  name: String,
  hits: Number
});

// every time a user visits a place, it gets recorded here
let favoritePlace = new Schema({
  id: Number,
  name: String,
  hits: Number
});

let medalSchema = new Schema({
  id: Number,
  name: String,
  level: String
});

// every time a user makes an update to a listing, it gets recorded here
let contribution = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  reported: {
    type: Number
  }
});

let userSchema = new Schema({
  bio: {
    type: String,
    maxLength: 150,
    default: 'Este usuario misterioso aun no ha llenado su biografia.'
  },
  contributions: {
    type: Array
  },
  consent: {
    type: Boolean,
    required: true
  },
  creationCity: {
    type: String
  },
  creationCountry: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  currentCity: {
    type: String
  },
  currentCountry: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  favoriteCategories: [
    favoriteCategory
  ],
  favoritePlaces: [
    favoritePlace
  ],
  firstName: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  hash: {
    type: String,
    required: true
  },
  notifications: {
    unseen: {
      type: Number
    },
    total: {
      type: Number
    }
  },
  lastName: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  imageFileName: {
    type: String,
    required: true,
    default: 'http://via.placeholder.com/900x900'
  },
  lastLogin: {
    type: Date
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  medals: [
    medalSchema
  ],
  privacy: {
    level: {
      type: String,
      required: true,
      default: 'Default'
    }
  },
  salt: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'Active' // Options are 'Active', 'Blocked', 'Deletion Requested', 'Deleted'
  },
  subscription: {
    level: {
      type: String,
      required: true,
      default: 'Default'
    }
  }
});

userSchema.index({
  firstName: 'text',
  lastName: 'text'
});

/**
 * Sets the password for the user, after salting and hashing it
 * @param {string} password - the password that the user inputted
 */
userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

/**
 * Validates the password; used when authenticating
 * @param {string} password - the inputted password
 * @returns {string} - the now hashed password
 */
userSchema.methods.validatePassword = function(password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

/**
 * Generates the JSON web token, used for tracking in the front-end
 */
userSchema.methods.generateJWT = function() {

  let expiry = new Date();
  expiry.setDate(expiry.getDate() +7);  // 7 day lifetime

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime()/1000),
  },'thisissecret');  // replace with env variable on heroku

};

// compile schema to bson, telling mongo to use 'users' collection
mongoose.model('User', userSchema, 'users');