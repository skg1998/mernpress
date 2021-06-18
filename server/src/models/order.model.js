const mongoose = require("mongoose");

//Cart item
const CartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.ObjectId, ref: "Product" },
  quantity: Number,
  status: {
    type: String,
    enum: ["Not processed", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Not processed"
  }
});

const CartItem = mongoose.model("CartItem", CartItemSchema);

// user_payment
const UserPaymentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  payment_type: {
    type: String,
    default: 'COD'
  },
  provider: {
    type: String
  },
  account_no: {
    type: Number
  },
  updated_At: {
    type: Date
  },
  created_At: {
    type: Date,
    default: Date.now
  }
})

const UserPayment = mongoose.model("UserPayment", UserPaymentSchema);

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
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  payment: { type: mongoose.Schema.ObjectId, ref: "UserPayment" },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, CartItem, UserPayment };
