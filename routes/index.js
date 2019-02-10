const reports = require('../routes/reports');
const auth = require('../routes/auth');

var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
    const data = {
        data: {
            name: "Edward Nilsson",
            acronym: "edni17",
            age: 20,
            city: "Guatemala City",
            msg: "Halvsvensk/halvguatemalansk som pluggar på distans och jobbar deltid som supporttekniker hos Misshosting.",
            goal: "Att bli en full-stack utvecklare som jobbar hemifrån",
            hobbies: "Gå på gymmet och kolla på serier. Han längtar efter den nya säsongen av Game of Thrones."
        }
    };

    res.json(data);
});

router.post("/register",
    (req, res) => auth.register(res, req.body));

router.post("/login",
    (req, res) => auth.login(res, req.body));


function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    title: "Token not valid",
                    detail: err.message
                }
            });
        }

        // Valid token send on the request
        next();
    });
}



module.exports = router;
