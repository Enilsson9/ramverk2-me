/* global describe it */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
//const db = require("../../db/database.js");
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Login', () => {
    describe('POST /login', () => {
        /*it('User does not exist', (done) => {
            chai.request(server)
                .post("/login")
                .set('x-access-token', 'whatever')
                .send({
                  'email': 'info@test.com',
                  'password': '3x4mp1E'
                })
                .end((err, res) => {

                    res.should.have.status(401);
                    res.error.text.should.be.a("string");
                    done();
                });
        });*/

        it('Email or password are missing', (done) => {
            chai.request(server)
                .post("/login")
                .send({
                  'email': '',
                  'password': ''
                })
                .end((err, res) => {

                    res.should.have.status(401);
                    res.error.text.should.be.a("string");
                    done();
                });
        });

        /*it('Wrong password', (done) => {
            chai.request(server)
                .post("/login")
                .set('x-access-token', 'whatever')
                .send({
                  'email': 'edward@nilsson.gt',
                  'password': 'notthispassword'
                })
                .end((err, res) => {

                    res.should.have.status(401);
                    res.error.text.should.be.a("string");
                    done();
                });
        });*/
    });
});
