const mongoose = require('mongoose')

const addTitleSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },

  image: {
    data: Buffer,
    contentType: String
  },

  updated: Date,

  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('addTitle', addTitleSchema);

