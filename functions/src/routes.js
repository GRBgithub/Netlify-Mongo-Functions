const { connect, close } = require("./utils/db");
const movieController = require("./controllers/movies-crud.js");

const routes = {
 

  "/movies": {
    GET: movieController.getMovies,
    POST: movieController.createMovie
  },
  "/movies/:id": {
    GET: movieController.getMovieById,
    PUT: movieController.updateMovie,
    DELETE: movieController.deleteMovie
  }
};

exports.handler = async (event, context) => {
  const { httpMethod, path } = event;
  const route = routes[path.replace('/api', '')];
  if (!route) {
    return {
      statusCode: 404,
      body: "Not Foundx"
    };
  }

  const handler = route[httpMethod];
  if (!handler) {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  await connect("mongodb+srv://GRB:OnAK61IYOlQvEHLN@cluster0.7vuaetn.mongodb.net/?retryWrites=true&w=majority");
    
  try {
    return await handler();
  } finally {
    await close();
  }
};
