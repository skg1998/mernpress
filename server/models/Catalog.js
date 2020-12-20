const mongoose = require('mongoose')

const catalogSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  }
})

module.exports =  mongoose.model('Catalog', catalogSchema); 