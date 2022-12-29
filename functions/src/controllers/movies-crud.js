/** @format */

const Movie = require("../models/movies-model");

const createMovie = async (req, res) => {
  const movieData = req.body;
  try {
    const movie = await Movie.create(movieData);
    return {
      statusCode: 200,
      body: JSON.stringify(movie),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error.message),
    };
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return {
      statusCode: 200,
      body: JSON.stringify(movies),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return {
        statusCode: 404,
        body: JSON.stringify("Movie not found"),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(movie),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};

const updateMovie = async (req, res) => {
  const movieData = req.body;
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, movieData, {
      new: true,
    });
    if (!movie) {
      return {
        statusCode: 404,
        body: JSON.stringify("Movie not found"),
      };
    }
    res.json(movie);
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify("Movie not found"),
    };
  }
};
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return {
        statusCode: 404,
        body: JSON.stringify("Movie not found"),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify("Movie deleted successfully"),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};

module.exports = {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
