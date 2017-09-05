const User = require('./../models/User.js');

const userController = {
  verify(req, res) {
    User.findOne({ username: req.body.username }, (err, result) => {
      if (result === null) return res.status(401).send('Incorrect Login Information');
      else if (result.password !== req.body.password) return res.status(401).send('Incorrect Login Information');
      else return res.status(200).send(true);
    });
  },
  
  create(req, res) {
    User.findOne({ username: req.body.username }, (err, result) => {
      if (err || result !== null) {
        return res.status(400).send(err);
      } else {
        User.create({
          username: req.body.username,
          password: req.body.password,
        }, res.status(200).send(true))
      };
    });
  }
}

module.exports = userController;
