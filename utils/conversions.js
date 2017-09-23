const applyDiscount = (price) => {
  const newPrice = Math.round(price - (price * 10) / 100).toFixed(2);
  return newPrice;
};

const getDiscount = (price) => {
  const discount = Math.round((price * 10) / 100).toFixed(2);
  return discount;
};

const findTax = (num) => {
  const number = Math.round(num * 8 / 100).toFixed(2);
  return number;
};

const processTotal = (num) => {
  const number = Math.round(num + (num * 8 / 100)).toFixed(2);
  return number;
};

const convertNum = (num) => {
  const number = Math.round(num).toFixed(2);
  return number;
};

module.exports = {
  applyDiscount,
  getDiscount,
  findTax,
  processTotal,
  convertNum,
};
