// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res, next) => {
    Celebrity.create(req.body)
        .then((celebrity) => {
            // res.send(req.body);
            res.redirect("/celebrities");
        })
        .catch((error) => {
            next(error);
        });
});

module.exports = router;
