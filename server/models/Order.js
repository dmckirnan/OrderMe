const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  created: { type: Date, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true, minlength: 10, maxlength: 10 },
  total: { type: Number },
  items: { type: Array },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
