const Order = require('./../models/order.js');

const orderController = {
  create(req, res) {
    Order.create({
      name: req.name,
      phone: req.phone,
    }, (err, result) => {
      if (err) console.log(err);
    });
  },

  update(req, res) {
    Order.find({ phone: req.body.phone }, { $set: { price: req.body.price }}, (err, result) => {
      if (err) console.log(err);
      res.status(200).send(true);
    });
  },

  delete(req, res) {
    Order.removeOne({ phone: req.body.phone }, req.body, (err, result) => {
      if (err) console.log(err);
      res.status(200).send(true);
    });
  }
}

module.exports = orderController;
