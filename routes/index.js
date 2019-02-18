const reports = require('../routes/reports');
const auth = require('../routes/auth');

var express = require('express');
var router = express.Router();

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




module.exports = router;
