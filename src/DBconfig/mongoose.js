const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.mongoURI;
mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB connection successful"))
  .catch(error => {
    console.error("MongoDB connection error:", error);
    // Add appropriate error handling here
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
