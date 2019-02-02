var express = require('express');
var router = express.Router();

// Testing routes with method
router.get("/", (req, res) => {
    res.json({
        data: {
            msg: "Got a GET request"
        }
    });
});

router.post("/", (req, res) => {
    res.json({
        data: {
            msg: "Got a POST request"
        }
    });
});

router.put("/", (req, res) => {
    res.json({
        data: {
            msg: "Got a PUT request"
        }
    });
});

router.delete("/", (req, res) => {
    res.json({
        data: {
            msg: "Got a DELETE request"
        }
    });
});


module.exports = router;
