// /nowshowing - get
// /comingsoon - get
// /movies - post - delete
const express = require("express");
const { addNewMovie, nowShowingMovie, upComingMovie } = require("../controllers/movie.controller");
const movieRouter = express.Router();

// build APIs for router
movieRouter.post("/new-movie", addNewMovie);
movieRouter.get("/now-showing", nowShowingMovie);
movieRouter.get("/upcoming", upComingMovie);

module.exports = movieRouter;