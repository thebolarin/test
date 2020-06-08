const should = require("should");
const request = require("supertest");
const expect = require("chai").expect;
var app = require('../app');



const userCredentials = {
    email: 'johndoe@gmail.com',
    password: 'garyTheSnail',
    name: "John doe",
    username:'doe',
    phone:'07023455569',
  }
  //now let's signup the user before we run any tests
  var authenticatedUser = request.agent(app);
  before(function(done){
    authenticatedUser
      .post('/signup')
      .send(userCredentials)
      .end(function(err, response){
        expect(response.statusCode).to.equal(200);
        expect(response.message).to.equal("User created successfully");
        expect('Content-Type', /json/);
        expect('Location', '/home');
        done();
      });
  });






