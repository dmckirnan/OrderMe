const mongoose = require('mongoose');
const User = require('./../server/models/User.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../server/server.js');
const should = chai.should();

chai.use(chaiHttp);

describe('/createUser', () => {
  it('should create a user in DB', () => {
    const user = {
      username: 'david',
      password: '123',
    };
    chai.request(server)
      .post('/createUser')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.user.should.have.property('username');
        res.body.user.should.have.property('password');
      done();
    });
  });
  it('should not create a user without password field', () => {
    const user = {
      username: 'james',
    };
    chai.request(server)
      .post('/createUser')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.have.property('password');
        res.body.errors.password.should.have.property('kind').eql('required');
      done();
    });
  });
  it('should not create a user without password field', () => {
    const user = {
      password: '123',
    };
    chai.request(server)
      .post('/createUser')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.have.property('username');
        res.body.errors.username.should.have.property('kind').eql('required');
      done();
    });
  });
  it('should not create a user with a username that already exists', () => {
    const user = {
      username: 'david',
      password: '456',
    };
    chai.request(server)
      .post('/createUser')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
      done();
    });
  });
});

describe('/verifyUser', () => {
  it('should get a user from DB by username', (done) => {
    const user = new User({ username: 'test', password: '123456' });
    user.save((err, user) => {
      chai.request(server)
        .get('/verifyUser')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.eql(true);
          res.body.should.have.property('username');
          res.body.should.have.property('password');
          res.body.should.have.property('password').eql(user.password);
        done();
      });
    });
  });
});