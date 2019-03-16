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


module.exports = router;
