const mongoose = require("mongoose");

//Cart item
const CartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.ObjectId, ref: "Product" },
  quantity: Number,
  shop: { type: mongoose.Schema.ObjectId, ref: "Shop" },
  status: {
    type: String,
    enum: ["Not processed", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Not processed"
  }
});

const CartItem = mongoose.model("CartItem", CartItemSchema)

const OrderSchema = new mongoose.Schema({
  products: [CartItemSchema],
  customer_name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  customer_email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required"
  },
  customer_phone: {
    type: Number,
    required: "Phone is required"
  },
  delivery_address: {
    street: { type: String, required: "Street is required" },
    city: { type: String, required: "City is required" },
    state: { type: String },
    zipcode: { type: String, required: "Zip Code is required" },
    country: { type: String, required: "Country is required" }
  },
  transaction_id: {},
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  user: { type: mongoose.Schema.ObjectId, ref: "User" }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, CartItem };
