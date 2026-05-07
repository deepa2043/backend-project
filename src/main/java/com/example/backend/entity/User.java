const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  status: String,
  score: Number
});

module.exports = mongoose.model("User", userSchema);