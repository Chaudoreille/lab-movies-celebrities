// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/", async (req, res, next) => {
    try {
        res.locals.allCelebrities = await Celebrity.find();
        res.render("celebrities/celebrities");
    } catch (error) {
        next(error);
    }
});

router.get("/create", (req, res, next) => {
    try {
        res.render("celebrities/new-celebrity");
    } catch (error) {
        next(error);
    }
});

router.post("/create", async (req, res, next) => {
    try {
        await Celebrity.create(req.body);
        res.redirect("/celebrities");
    } catch (error) {
        next(error);
    }
});

module.exports = router;
