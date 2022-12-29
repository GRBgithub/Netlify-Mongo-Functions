/** @format */

const Status = require("../utils/status");
const handleRequest =
  (fn) =>
  async (...args) => {
    try {
      const result = await fn(...args);
      return Status.Success(result);
    } catch (error) {
      return Status.Error(error.message);
    }
  };

module.exports = handleRequest;
