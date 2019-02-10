var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');


router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "Reports here, please choose a kmom."
        }
    };

    res.json(data);
});

router.get("/kmom01", (req, res) => {
    const data = {
        data: {
            msg: [
                "Nodejs backend ramverk har underlättat jobbet för oss, utvecklarna, som alla andra ramverk för olika programmeringspråk. JavaScript på front-end är känd för att ha för många ramverk. Detta är inte fallet med JavaScript på back-end. ",
                "\n",
                "På back-end verkar det finnas en del ramverk, men ett ramverk sticker ut från de andra. Det ramverket är Express. Därför valde jag att använda det. Dessutom är Express särskilt bra för att hantera API:er (och det fanns med i övningsuppgiften).",
                "\n",
                "För att organisera min kod delade jag upp den i routes som ligger i katalogen '/routes'. Därefter anropar jag routerna som behövs på app.js. Jag tyckte att det var ett smidigt sätt att dela upp koden. Man behöver dock nämna sina router filer på ett semantiskt sätt, annars kan det bli svårt att leta efter rätt fil, om man har flera filer.",
                "\n",
                "Jag försökte scaffolda med express-generator, men tyckte att det var för mycket Nodejs på en kmom, och ska lämna det till nästa. Jag har åtminstone installerat det via npm.",
                "\n",
                "Min TIL är att det är väldigt viktigt med rättigheter och lösenord när det gäller virtuella servrar. Man måste skydda servern genom att skapa användare och sätta svåra lösenord. Jag får träna lite på att skapa lösenord på terminalen, eftersom jag brukar glöma mina 'svåra' lösenord rätt så ofta."
            ]
        }
    };

    res.json(data);
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


    db.run("INSERT INTO reports (email, kmom, content) VALUES (?, ?, ?)",
        email,
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


module.exports = router;
