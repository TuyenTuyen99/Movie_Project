const MovieModel = require("../models/movies.model");
const { where } = require("sequelize");
const { Op } = require("sequelize");

const addNewMovie = async (req, res) => {
  const {
    title,
    actors,
    director,
    genre,
    country,
    releaseDate,
    description,
    movieImage,
    // categoryId,
  } = req.body;

  try {
    // check if existed Movie
    const existedMovie = await MovieModel.findOne({
      where: {
        [Op.and]: [{ title }, { releaseDate }],
      },
    });

    if (existedMovie) {
      return res.json({ msg: "Already existed movie!" });
    }

    // create and save into database
    await MovieModel.create({
      title: title,
      actors: actors,
      director: director,
      genre: genre,
      country: country,
      releaseDate: releaseDate,
      description: description,
      movieImage,
      categoryId: 2,
    });

    res.json({ msg: "Create Movie successfully" });
  } catch (error) {
    res.json({ msg: "Server get failed in trying to add new movie" });
    console.log(error);
  }
};

const nowShowingMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findAll({ where: { categoryId: 1 } });
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Server get failed in trying to fetch Now-showing Movies" });
  }
};

const upcomingMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findAll({ where: { categoryId: 2 } });
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Server get failed in trying to fetch upComing Movies" });
  }
};

const allMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findAll();
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Server get failed in trying to fetch upComing Movies" });
  }
};

const movieDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await MovieModel.findOne({ where: { id } });
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Server get failed in trying to fetch Movie Detail" });
  }
};

module.exports = {
  addNewMovie,
  nowShowingMovie,
  upcomingMovie,
  allMovie,
  movieDetail,
};
