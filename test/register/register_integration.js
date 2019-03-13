/* global describe it */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const db = require("../../db/database.js");
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Register', () => {
    describe('POST /register', () => {
        it('Email or password are missing | 401', (done) => {
            chai.request(server)
                .post("/register")
                .send({
                  'email': 'info@example',
                  'password': ''
                })
                .end((err, res) => {

                    res.should.have.status(401);
                    res.error.text.should.be.a("string");
                    done();
                });
        });
    });
});
