const inventory = require('./../data/inventory.js');
const images = require('./../data/images.js');

const Product = require('./../server/models/product.js');
const productController = require('./../server/controllers/product.js');

const dataManager = {
  post: (req, res, next) => {
    Product.findOne({ sku: 1000 }, (err, result) => {
      if (result) return;
      else {
        for (let i = 0; i < inventory.length; i += 1) {
          let data = {
            sku: inventory[i].sku,
            image: images[i],
            name: inventory[i].name,
            price: inventory[i].price,
            quantity: inventory[i].quantity,
          };
          console.log(data.image);
          productController.create(data);
        }
      }
    });
    next();
  }
}

module.exports = dataManager;
