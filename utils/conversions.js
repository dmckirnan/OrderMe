const conversions = {
  applyDiscount: (price) => {
    let newPrice = Math.round(price - (price * 10) / 100).toFixed(2);
    return newPrice;
  },
  getDiscount: (price) => {
    let discount = Math.round((price * 10) / 100).toFixed(2);
    return discount;
  },
  findTax: (num) => {
    let number = Math.round((num * 8) / 100).toFixed(2);
    return number;
  },
  processTotal: (num) => {
    let number = Math.round(num + (num * 8 / 100)).toFixed(2);
    return number;
  },
  convertNum: (num) => {
    let number = Math.round(num).toFixed(2);
    return number;
  }
}

module.exports = conversions;
