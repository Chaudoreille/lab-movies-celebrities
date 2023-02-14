// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/", (req, res, next) => {
    Movie.find()
        .populate("cast")
        .then((movies) => {
            res.locals.movies = movies;
            res.render("movies/movies");
        })
        .catch((error) => {
            next(error);
        });
});

router.get("/create", (req, res, next) => {
    Celebrity.find()
        .then((celebrities) => {
            res.locals.cast = celebrities;
            res.render("movies/new-movie");
        })
        .catch((error) => {
            next(error);
        });
});

router.post("/create", (req, res, next) => {
    Movie.create(req.body)
        .then((movie) => {
            res.redirect("/movies");
        })
        .catch((error) => {
            next(error);
        });
});

module.exports = router;
