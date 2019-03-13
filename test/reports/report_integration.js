/* global describe it */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
//const db = require("../../db/database.js");
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Reports', () => {
    /*describe('GET /reports/kmom01', () => {
        it('200 kmom01', (done) => {
            chai.request(server)
                .get("/reports/kmom01")
                .end((err, res) => {

                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.be.an("object");
                    res.body.data.should.have.a.property('msg');


                    done();

                });
        });
    });

    describe('GET /reports/kmom02', () => {
        it('200 kmom02', (done) => {
            chai.request(server)
                .get("/reports/kmom02")
                .end((err, res) => {

                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.be.an("object");
                    res.body.data.should.have.a.property('msg');

                    done();
                });
        });
    });*/

    describe('POST /reports', () => {
        it('Kmom or content missing', (done) => {
            chai.request(server)
                .post("/reports")
                .send({
                  'kmom': null,
                  'content': ''
                })
                .end((err, res) => {

                    res.should.have.status(500);
                    res.error.text.should.be.a("string");
                    done();
                });
        });
    });

    describe('POST /reports/update', () => {
        it('Kmom or content missing', (done) => {
            chai.request(server)
                .post("/reports/update")
                .send({
                  'kmom': null,
                  'content': ''
                })
                .end((err, res) => {

                    res.should.have.status(500);
                    res.error.text.should.be.a("string");
                    done();
                });
        });
    });
});
