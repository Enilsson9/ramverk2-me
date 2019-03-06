/* global describe it */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Reports', () => {
    describe('GET /reports/kmom01', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/reports/kmom01")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.be.an("array");
                    res.body.data.length.should.be.above(0);

                    done();
                });
        });
    });

    describe('GET /reports/kmom02', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/reports/kmom02")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.be.an("array");
                    res.body.data.length.should.be.above(0);

                    done();
                });
        });
    });
});
