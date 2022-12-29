const mongoose = require('mongoose');
let _client;

const connect = async url => {
  if (!_client) {
    _client = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

  }
  return _client;
};

const close = async () => {
  if (_client) {
    await _client.disconnect();
    _client = null;
  }
};

module.exports = {
  connect,
  close
};
