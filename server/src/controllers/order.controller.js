const { Order, CartItem } = require("../models/order.model");
const _ = require("lodash");
const errorHandler = require("../util/dbErrorHandler");
const stripe = require('stripe')(process.env.STRIPE_KEY);

/**
 * 
 * @desc create Order
 * @route POST api/v1/order/
 * @access Private
 */
const create = (req, res) => {
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
    res.status(200).json(result);
  });
};

/**
 * 
 * @desc get list of shop
 * @route GET api/v1/order/list-by-shop
 * @access Public
 */
const listByShop = (req, res) => {
  Order.find({ "products.shop": req.shop._id })
    .populate({ path: "products.product", select: "_id name price" })
    .sort("-created")
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }
      res.json(orders);
    });
};

/**
 * 
 * @desc update order detail
 * @route PUT api/v1/order/
 * @access Private
 */
const update = (req, res) => {
  Order.update(
    { "products._id": req.body.cartItemId },
    {
      $set: {
        "products.$.status": req.body.status
      }
    },
    (err, order) => {
      if (err) {
        return res.status(400).send({
          error: errorHandler.getErrorMessage(err)
        });
      }
      res.json(order);
    }
  );
};


const getStatusValues = (req, res) => {
  res.json(CartItem.schema.path("status").enumValues);
};

/**
 * 
 * @desc get order by id
 * @route POST api/v1/order/order-by-id
 * @access Public
 */
const orderByID = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .populate("products.shop", "name")
    .exec((err, order) => {
      if (err || !order)
        return res.status("400").json({
          error: "Order not found"
        });
      req.order = order;
      next();
    });
};

/**
 * 
 * @desc Order list by user
 * @route GET api/v1/order/order-list-by-user
 * @access Public
 */
const listByUser = (req, res) => {
  Order.find({ user: req.profile._id })
    .sort("-created")
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }
      res.json(orders);
    });
};

const read = async (req, res) => {
  try {
    const userId = req.user.id;
    const order = await Order.find(userId).sort({ date: -1 })

    if (!order) {
      return res.status(404).json({
        status: false,
        message: `Order not found by given id: ${userId}`
      })
    }

    res.status(201).json({
      status: true,
      message: `Order found by given id: ${userId}`,
      data: order
    })

  } catch (err) {
    next(err);
  }
};

exports.charge = async (req, res, next) => {
  try {
    let { status } = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      source: req.body.token,
    })
    return res.json({ status })
  } catch (err) {
    next(err);
  }
}

module.exports = {
  create,
  listByShop,
  update,
  getStatusValues,
  orderByID,
  listByUser,
  read
};
