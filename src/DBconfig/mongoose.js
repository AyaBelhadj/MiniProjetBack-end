const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/miniprojetDB"; 
 mongoose. connect(  mongoDB,{ useUnifiedTopology: true, useNewUrlParser: true } ).then(() => console.log("MongoDB connection successful"))
 mongoose.Promise = global.Promise;
module.exports=mongoose;