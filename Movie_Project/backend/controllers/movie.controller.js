const MovieModel = require("../models/movies.model");

const AddNewMovie = async (req, res) => {
  const { title, movieImage, actors, directors, genre, country, releaseDate, description, categoryId } = req.body;

  try {
    const movie = await MovieModel.create({
      title: title,
      movieImage: movieImage,
      actors: actors,
      directors: directors,
      genre: genre,
      country: country,
      releaseDate: releaseDate,
      description: description,
      categoryId: categoryId
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ msg: "Server get failed in trying to add new movie"})
    
  }
}