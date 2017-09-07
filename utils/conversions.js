const applyDiscount = (price) => {
  let newPrice = Math.round(price - (price * 10) / 100).toFixed(2);
  return newPrice;
};

const getDiscount = price => {
  let discount = Math.round((price * 10) / 100).toFixed(2);
  return discount;
};

const findTax = num => {
  let number = Math.round((num * 8) / 100).toFixed(2);
  return number;
};

const processTotal = num => {
  let number = Math.round(num + (num * 8 / 100)).toFixed(2);
  return number;
};

const convertNum = num => {
  let number = Math.round(num).toFixed(2);
  return number;
}

module.exports = {
  applyDiscount,
  getDiscount,
  findTax,
  processTotal,
  convertNum
};
