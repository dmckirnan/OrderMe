const Order = require('./../models/order.js');

const orderController = {
  create: (req, res) => {
    const created = Date.now();
    Order.create({
      created,
      total: req.body.total,
      items: req.body.items,
      name: req.body.name,
      phone: req.body.phone,
    }, (err) => {
      if (err) console.log(err);
      else {
        res.status(200);
        res.send(created.toString());
      }
    });
  },

  update: (req, res) => {
    Order.findOne({ created: req.body.created }, (err, order) => {
      if (err) return err;
      order.name = req.body.name;
      order.phone = req.body.phone;
      order.save((error) => {
        if (error) return (error);
      });
      res.status(200).send(true);
    });
  },

  get: (req, res) => {
    const query = Order.find({ created: req.body.created });
    query.exec((err, product) => {
      if (err) res.send(err);
      return res.send(product);
    });
  },

  delete: (req, res) => {
    Order.removeOne({ created: req.body.created }, req.body, (err) => {
      if (err) console.log(err);
      res.status(200).send(true);
    });
  },
};

module.exports = orderController;
