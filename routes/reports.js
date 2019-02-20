var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');
const jwt = require('jsonwebtoken');


router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "Reports here, please choose a kmom."
        }
    };

    res.json(data);
});


router.get("/kmom01", (req, res) => {
    db.each("SELECT content FROM reports WHERE kmom=1", (err, row) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/reports",
                    title: "Database error",
                    detail: err.message
                }
            });
        }

        const data = {
            data: {
                msg: row.content
            }
        };

        res.json(data);
    });
});

router.get("/kmom02", (req, res) => {
    db.each("SELECT content FROM reports WHERE kmom=2", (err, row) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/reports",
                    title: "Database error",
                    detail: err.message
                }
            });
        }

        const data = {
            data: {
                msg: row.content
            }
        };

        res.json(data);
    });
});



router.post("/",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => addReport(res, req.body));

function addReport(res, body) {

    const kmom = body.kmom;
    const content = body.content;

    if (!kmom || !content) {
        return res.status(401).json({
            errors: {
                status: 401,
                source: "/reports",
                title: "Kmom or content missing",
                detail: "Kmom or content missing in request"
            }
        });
    }


    db.run("INSERT INTO reports (kmom, content) VALUES (?, ?)",
        kmom,
        content, (err) => {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        source: "/reports",
                        title: "Database error",
                        detail: err.message
                    }
                });
            }

            res.status(201).json({
                data: {
                    message: "Report successfully submitted."
                }
            });
        });
}

router.post("/update",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => updateReport(res, req.body));

function updateReport(res, body) {

    const kmom = body.kmom;
    const content = body.content;

    if (!kmom || !content) {
        return res.status(401).json({
            errors: {
                status: 401,
                source: "/reports",
                title: "Kmom or content missing",
                detail: "Kmom or content missing in request"
            }
        });
    }


    db.run("UPDATE reports SET content = ? WHERE kmom = ?",
        content,
        kmom, (err) => {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        source: "/reports",
                        title: "Database error",
                        detail: err.message
                    }
                });
            }

            res.status(201).json({
                data: {
                    message: "Report successfully updated."
                }
            });
        });
}

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
