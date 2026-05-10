const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/dashboard");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Error:", error);
  }
};

module.exports = connectDB;