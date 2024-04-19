const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.DB_URL;
mongoose.connect(URL)
  .then(() => console.log("MongoDB connection successful"))
  .catch(error => {
    console.error("MongoDB connection error:", error);
    // Add appropriate error handling here
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
