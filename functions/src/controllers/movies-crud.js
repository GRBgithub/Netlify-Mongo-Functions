/** @format */
const mongoose = require("mongoose");
const handleRequest = require("../utils/request");
const Movie = require("../models/movies-model");

const postMovies = handleRequest(async (body) => {
  const newModel = new Movie(body);
  return await newModel.save();
});

const getMovies = handleRequest(async () => {
  const datas = await Movie.find();
  return datas;
});

const getMoviesById = handleRequest(async (body, id) => {
  const data = await Movie.findById(id);
  if (!data) throw new Error("Movie not found");
  return data;
});

const putMoviesById = handleRequest(async (body, id) => {
  const data = await Movie.findByIdAndUpdate(id, body, {
    new: true,
  });
  if (!data) throw new Error("Movie not found");
  return data;
});

const deleteMoviesById = handleRequest(async (body, id) => {
  const data = await Movie.findByIdAndDelete(id);
  if (!data) throw new Error("Movie not found");
  return data;
});

module.exports = {
  postMovies,
  getMovies,
  getMoviesById,
  putMoviesById,
  deleteMoviesById,
};
