// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/", async (req, res, next) => {
    try {
        res.locals.movies = await Movie.find().populate("cast");
        res.render("movies/movies");
    } catch (error) {
        next(error);
    }
});

router.get("/create", async (req, res, next) => {
    try {
        res.locals.cast = await Celebrity.find();
        res.render("movies/new-movie");
    } catch (error) {
        next(error);
    }
});

router.post("/create", async (req, res, next) => {
    try {
        await Movie.create(req.body);
        res.redirect("/movies");
    } catch (error) {
        next(error);
    }
});

router.get("/:id/edit", async (req, res, next) => {
    try {
        res.locals.update = true;
        res.locals.cast = await Celebrity.find();
        res.locals.movie = await Movie.findById(req.params.id);

        res.locals.cast.forEach((celebrity) => {
            for (let star of res.locals.movie.cast) {
                if (star["_id"].equals(celebrity["_id"])) {
                    celebrity.selected = true;
                }
            }
        });

        res.render("movies/new-movie");
    } catch (error) {
        next(error);
    }
});

router.post("/:id/edit", async (req, res, next) => {
    try {
        movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/movies/${req.params.id}`);
    } catch (error) {
        next(error);
    }
});

router.get("/:id/delete", async (req, res, next) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.redirect("/movies");
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        res.locals.movie = await Movie.findById(req.params.id).populate("cast");
        res.render("movies/movie-details");
    } catch (error) {
        next(error);
    }
});

module.exports = router;
