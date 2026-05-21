const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  token: String,
  userId: String
});

module.exports = mongoose.model("RefreshToken", schema);