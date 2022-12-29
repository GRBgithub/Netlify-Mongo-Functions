const Success = (data, statusCode = 200) => {
  return {
    statusCode,
    body: JSON.stringify(data)
  };
};
const NotFound = (errorMessage = "Not Found", statusCode = 404) => {
  return {
    statusCode,
    body: JSON.stringify(errorMessage)
  };
};
const Error = (errorMessage, statusCode = 500) => {
  return {
    statusCode,
    body: JSON.stringify(errorMessage)
  };
};

module.exports = {
  Success,
  Error,
  NotFound
};
