const mongoose = require('mongoose')
const slugify = require('slugify');

let Sizes = new mongoose.Schema({
  size: { type: String, required: true },
  available: { type: Number, required: true, min: 0, max: 1000 },
  sku: { type: String, required: true },
  price: { type: Number, required: true, min: 0 }
});

let Images = new mongoose.Schema({
  data: String,
  cloudnaryId: String
});

let Variants = new mongoose.Schema({
  color: String,
  images: [Images],
  sizes: [Sizes]
});

let Catalogs = new mongoose.Schema({
  name: String
});

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  variants: [Variants],
  brand: { type: String },
  catalogs: [Catalogs],
  category: { type: mongoose.Schema.ObjectId, ref: 'Category' },
  discount: { type: mongoose.Schema.ObjectId, ref: 'Discount' },
  shop: { type: mongoose.Schema.ObjectId, ref: 'Shop' },
  review: { type: mongoose.Schema.ObjectId, ref: 'Review' },
  averageRating: String,
  totalUserRating: Number,
  slug: String,
  modified: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now }
})

ProductSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next();
})

module.exports = mongoose.model('Product', ProductSchema);



