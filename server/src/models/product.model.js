const mongoose = require('mongoose')
const slugify = require('slugify')

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
    type: Boolean
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
  slug: String,
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

//slug genrate
ProductSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next();
})

module.exports = mongoose.model('Product', ProductSchema);



