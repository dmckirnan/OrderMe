const Product = require('./../models/product.js');

const productController = {
  create: (req, res) => {
    Product.findOne({ sku: req.sku }, (err, result) => {
      if (result) return res.status(200).send(false);
      else if (req.sku && req.name && req.price && req.quantity) {
        Product.create({
          sku: req.sku,
          name: req.name,
          price: req.price,
          description: req.description,
          quantity: req.quantity,
        });
      } else return res.status(200).send(false);
    });
  },

  get: (req, res) => {
    const query = Product.find({}).sort({ sku: 1 });
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
  },
};

module.exports = productController;
