/** @format */

const { connect, close } = require("./db");
const Status = require("./status");
const controllers = require("../controllers/index");

let _client;
exports.handler = async (event) => {
  // Destructure the event object to get the HTTP method and path
  let { httpMethod, path, body } = event;
  // Call getControllerAndMethod to get the controller and method for the request
  const { controller, method, id } = getControllerAndMethod(path, httpMethod);

  if (!controller) return Status.NotFound();
  if (!method) return Status.Error("Method Not Allowed", 405);
  if (body) body = JSON.parse(body);

  try {
    // Connect to the database
    await connect(_client);
    // Call the method on the controller
    return await controller[method](body, id);
  } finally {
    // Close the database connection after the request has completed
    await close(_client);
  }
};

const PATH_REGEX = /^\/(\w+)(?:\/(\w+))?/;

const getControllerAndMethod = (path, httpMethod) => {
  // Extract the resource and id from the path
  const [, resource, id] = path.replace("/api", "").match(PATH_REGEX);
  // Get the controller for the given resource
  const controller = controllers[`${resource}Controller`];

  if (!controller) {
    return {
      controller: undefined,
      method: undefined,
    };
  }

  // Construct the method name based on the HTTP method and resource name
  const method = `${httpMethod.toLowerCase()}${resource[0].toUpperCase()}${resource.slice(1)}`;

  if (id) {
    return {
      controller,
      method: method + "ById",
      id,
    };
  }

  return {
    controller,
    method: method,
  };
};
