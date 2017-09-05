const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, minlength: 10, maxlength: 10 },
  price: { type: Number },
  items: { type: Array, minlength: 1 }
});

const Order = mongoose.model('Order', userSchema);
module.exports = Order;
