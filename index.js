require ('dotenv').config()
const express = require('express');
const app = express();
const port = 5700;
const http = require("http")
const cors=require("cors")
const mongoose=require('mongoose')
const dataBase=require('./src/DBconfig/mongoose')



const server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.use(cors())
const userRoute=require('./src/routes/UserRouter');
app.use("/user",userRoute);
const DepartementRoute=require('./src/routes/DepartementRouter');
app.use("/departement",DepartementRoute);
const EnseignantRoute=require('./src/routes/EnseignantRouter');
app.use(EnseignantRoute);


server.listen(port, () => {
  console.log('Listening on port ' + port);
});
