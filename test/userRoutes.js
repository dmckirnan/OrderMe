// const mongoose = require('mongoose');
// const User = require('./../server/models/user.js');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('./../server/server.js');
// const should = chai.should();

// chai.use(chaiHttp);

// describe('/createUser', () => {
//   it('should create a user in DB', (done) => {
//     const user = {
//       username: 'david',
//       password: '123',
//     };
//     chai.request(server)
//       .post('/createUser')
//       .send(user)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.equal(true);
//       done();
//     });
//   });
//   it('should not create a user without password field', (done) => {
//     const user = {
//       username: 'james',
//     };
//     chai.request(server)
//       .post('/createUser')
//       .send(user)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.equal(false);
//       done();
//     });
//   });
//   it('should not create a user without username field', (done) => {
//     const user = {
//       password: '123',
//     };
//     chai.request(server)
//       .post('/createUser')
//       .send(user)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.equal(false);
//       done();
//     });
//   });
//   it('should not create a user with a username that already exists', (done) => {
//     const user = {
//       username: 'david',
//       password: '456',
//     };
//     chai.request(server)
//       .post('/createUser')
//       .send(user)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.equal(false);
//       done();
//     });
//   });
// });

// describe('/verifyUser', () => {
//   it('should get a user from DB by username', (done) => {
//       chai.request(server)
//         .post('/verifyUser')
//         .send({username: 'david', password: '123'})
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.equal(true);
//         done();
//       });
//     });
// });
