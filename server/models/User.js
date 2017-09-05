const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://darrick:123@ds123084.mlab.com:23084/orderme', (err) => {
  if (err) return console.error(err);
  console.log('connected to mLabs remote');
});

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
