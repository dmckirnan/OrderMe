const Product = require('./../models/product.js');

const productController = {
  create: (req, res) => {
    Product.findOne({ sku: req.body.sku }, (err, result) => {
      if (result) return res.status(200).send(false);
      else if (req.body.sku && req.body.name && req.body.price && req.body.quantity) {
        Product.create({
          sku: req.body.sku,
          name: req.body.name,
          price: req.body.price,
          quantity: req.body.quantity
        });
      } else return res.status(200).send(false);
    });
  },

  get: (req, res) => {
    let query = Product.find({});
    query.exec((err, products) => {
      if (err) res.send(err);
      return res.send(products);
    });
  },

  drop: (req, res) => {
    Product.remove({}, (err) => {
      if (err) console.log(err);
      else res.send('Product DB Dropped');
    });
  }
}

module.exports = productController;
