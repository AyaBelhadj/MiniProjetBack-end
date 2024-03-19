require('dotenv').config()
const mongoose = require('mongoose')

const uri =process.env.mongoURI

mongoose.connect(uri)
.then(()=>{console.log("Connected to Data Base")})
.catch((e)=>{console.log(e)})

module.exports = mongoose