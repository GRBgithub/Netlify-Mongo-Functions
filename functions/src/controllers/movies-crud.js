/** @format */
const handleRequest = require("../utils/request");
const Movie = require("../models/movies-model");

const postMovies = handleRequest(async (body) => {
  const movieData = body;
  const movie = await Movie.create(movieData);
  return movie;
});

const getMovies = handleRequest(async () => {
  const movies = await Movie.find();
  return movies;
});

const getMoviesById = handleRequest(async (id) => {
  const movie = await Movie.findById(id);
  if (!movie) throw new Error("Movie not found");
  return movie;
});

const updateMovies = handleRequest(async (id, body) => {
  const movieData = body;
  const movie = await Movie.findByIdAndUpdate(id, movieData, {
    new: true,
  });
  if (!movie) throw new Error("Movie not found");
  return movie;
});

const deleteMovies = handleRequest(async (id) => {
  const movie = await Movie.findByIdAndDelete(id);
  if (!movie) throw new Error("Movie not found");
  return movie;
});

module.exports = {
  postMovies,
  getMovies,
  getMoviesById,
  updateMovies,
  deleteMovies,
};
