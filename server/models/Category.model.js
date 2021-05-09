const mongoose = require('mongoose')

const catalogSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  }
})
const Catalog = mongoose.model('Catalog', catalogSchema);

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  image: {
    data: Buffer,
    contentType: String
  },
  child_Category: {
    type: [],
    default: undefined
  },
  parent_Category: {
    type: [],
    default: undefined
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  catalog: { type: mongoose.Schema.ObjectId, ref: 'Catalog' }
})

module.exports = mongoose.model('Category', CategorySchema);



