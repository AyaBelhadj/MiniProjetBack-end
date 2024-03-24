
const express = require('express');
const app = express();
const port = 5700;
const http = require("http");
const mongoose = require('mongoose');
const db = require('./src/DBconfig/mongoose')
const cors=require("cors")
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

const EtudiantRoute=require('./src/routes/EtudiantRouter');
app.use(EtudiantRoute);
const GroupeRoute=require('./src/routes/GroupeRouter');
app.use(GroupeRoute);
const FiliereRoute=require('./src/routes/FiliereRouter');
app.use(FiliereRoute);
const EvenementRoute=require('./src/routes/EvenementRouter');
app.use(EvenementRoute);


server.listen(port, () => {
  console.log('Listening on port ' + port);
});
