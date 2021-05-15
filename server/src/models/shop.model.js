const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date,
  owner: { type: mongoose.Schema.ObjectId, ref: 'Admin' }
})

module.exports = mongoose.model('Shop', ShopSchema);
