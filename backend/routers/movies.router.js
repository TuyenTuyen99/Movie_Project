// /nowshowing - get
// /comingsoon - get
// /movies - post - delete
const express = require("express");
const { addNewMovie, nowShowingMovie, upcomingMovie, allMovie, movieDetail } = require("../controllers/movie.controller");
const { movieSchedule } = require("../controllers/schedule.controller");
const movieRouter = express.Router();

// build APIs for router
movieRouter.get("/", allMovie);
movieRouter.post("/new-movie", addNewMovie);
movieRouter.get("/now-showing", nowShowingMovie);
movieRouter.get("/upcoming", upcomingMovie);
movieRouter.get("/:id", movieDetail);
movieRouter.get("/:id/schedule", movieSchedule);

module.exports = movieRouter;