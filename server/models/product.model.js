const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Product Name is required'
  },
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  sku: {
    type: String
  },
  metaTagTitle: {
    type: String
  },
  upc: {
    type: String
  },
  modal: {
    type: String
  },
  quantity: {
    type: Number,
    required: "Quantity is required"
  },
  price: {
    type: Number,
    required: "Price is required"
  },
  outOfStockStatus: {
    type: Boolean
  },
  requiredShipping: {
    type: Number
  },
  dateAvailable: {
    type: String
  },
  condition: [{
    type: String
  }],
  status: {
    type: Number
  },
  sortOrder: {
    type: Number
  },
  category: { type: mongoose.Schema.ObjectId, ref: 'Category' },
  review: { type: mongoose.Schema.ObjectId, ref: 'Review' },
  discount: { type: mongoose.Schema.ObjectId, ref: 'Discount' },
  shop: { type: mongoose.Schema.ObjectId, ref: 'Shop' },
  updated_at: Date,
  created: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
})

module.exports = mongoose.model('Product', ProductSchema);



