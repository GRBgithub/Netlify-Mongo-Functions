const postMovies = handleRequest(async (body) => {
  const movieData = body;
  const movie = await Movie.create(movieData);
  return movie;
});