const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  created: { type: Date, required: true },
  total: { type: Number },
  items: { type: Array },
  name: { type: String },
  phone: { type: Number },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
