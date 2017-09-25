const inventory = require('./../data/inventory.js');

const Product = require('./../server/models/product.js');
const productController = require('./../server/controllers/product.js');

const dataManager = {
  post: (req, res, next) => {
    Product.findOne({ sku: 1000 }, (err, result) => {
      if (result) return;
      for (let i = 0; i < inventory.length; i += 1) {
        const data = {
          sku: inventory[i].sku,
          name: inventory[i].name,
          price: inventory[i].price,
          description: inventory[i].description,
          quantity: inventory[i].quantity,
        };
        productController.create(data);
      }
    });
    next();
  },
};

module.exports = dataManager;
