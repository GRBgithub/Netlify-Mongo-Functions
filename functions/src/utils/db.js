const mongoose = require("mongoose");

let _client;

const connect = async (url) => {
  // create a new connection if one doesn't already exist
  if (!_client) {
    _client = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  return _client;
};

const close = async () => {
  // destroy the connection if it exists
  if (_client) {
    await _client.disconnect();
    _client = null;
  }
};

module.exports = {
  connect,
  close,
};
