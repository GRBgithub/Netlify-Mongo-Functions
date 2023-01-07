const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
  }
});

module.exports = mongoose.model("Movie", movieSchema);
