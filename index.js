require("dotenv").config();

const express = require('express');
const app = express();
const port = 5700;
const http = require("http")
const cors=require("cors")
const mongoose=require('mongoose')
const dataBase=require('./src/DBconfig/mongoose')


const multer = require('multer');
const Pdf = require('./src/models/Pdf');
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./src/swagger")

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
const MatiereRoute=require('./src/routes/MatiereRouter');
app.use(MatiereRoute);
const NoteRoute=require('./src/routes/NoteRouter');
app.use(NoteRoute);
const SupportDeCoursRoute=require('./src/routes/SupportDeCoursRouter');
app.use(SupportDeCoursRoute);


const storage = multer.memoryStorage();
const upload = multer({ storage });
app.use(upload.single('pdf'));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
console.log(process.env.DB_URL)
server.listen(port, () => {
  console.log('Listening on port ' + port);
});
