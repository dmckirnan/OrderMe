const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  created: { type: String },
  total: { type: Number },
  items: { type: Array },
  name: { type: String },
  phone: { type: String },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
