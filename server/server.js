const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const userController = require('./controllers/user.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '..', 'build')));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'build/index.html')));
app.post('/verifyUser', userController.verify);
app.post('/createUser', userController.create);


let server = app.listen(3000, () => console.log('Listening on 3000'));
module.exports = server;
