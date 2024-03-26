require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.mongoURI;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB :)"))
  .catch((e) => console.log(e));

module.exports = mongoose;
