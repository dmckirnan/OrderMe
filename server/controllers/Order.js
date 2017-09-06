const Order = require('./../models/order.js');

const orderController = {
  create: (req, res) => {
    let created = Date.now();
    Order.create({
      created,
      name: req.body.name,
      phone: req.body.phone,
    }, (err, result) => {
      if (err) console.log(err);
    });
  },

  update: (req, res) => {
    Order.find({ created: req.body.created }, { $set: { total: req.body.total } }, { $set: { items: req.body.items } }, (err, result) => {
      if (err) console.log(err);
      res.status(200).send(true);
    });
  },

  get: (req, res) => {
    let query = Product.find({ created: req.body.created });
    query.exec((err, product) => {
      if (err) res.send(err);
      return res.send(product);
    });
  },

  delete: (req, res) => {
    Order.removeOne({ created: req.body.created }, req.body, (err, result) => {
      if (err) console.log(err);
      res.status(200).send(true);
    });
  }
}

module.exports = orderController;
