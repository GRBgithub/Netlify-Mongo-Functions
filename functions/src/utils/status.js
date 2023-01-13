/** @format */

const Success = (data, statusCode = 200) => {
  return {
    statusCode,
    body: JSON.stringify(data),
    headers: {
      "access-control-allow-origin": "*",
    },
  };
};
const NotFound = (errorMessage = "Not Found", statusCode = 404) => {
  return {
    statusCode,
    body: JSON.stringify(errorMessage),
    headers: {
      "access-control-allow-origin": "*",
    },
  };
};
const Error = (errorMessage, statusCode = 500) => {
  return {
    statusCode,
    body: JSON.stringify(errorMessage),
    headers: {
      "access-control-allow-origin": "*",
    },
  };
};

module.exports = {
  Success,
  Error,
  NotFound,
};
