require("dotenv").config();

const express = require("express");
const app = express();
const port = 5700;
const http = require("http");
const mongoose = require("mongoose");
const db = require("./src/DBconfig/mongoose");
const cors = require("cors");
const multer = require("multer");
const Pdf = require("./src/models/Pdf");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./src/swagger");

const server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


const userRoute = require("./src/routes/UserRouter");
const DepartementRoute = require("./src/routes/DepartementRouter");
const EnseignantRoute = require("./src/routes/EnseignantRouter");
const EtudiantRoute = require("./src/routes/EtudiantRouter");
const GroupeRoute = require("./src/routes/GroupeRouter");
const FiliereRoute = require("./src/routes/FiliereRouter");
const EvenementRoute = require("./src/routes/EvenementRouter");
const MatiereRoute = require("./src/routes/MatiereRouter");
const NoteRoute = require("./src/routes/NoteRouter");
const SupportDeCoursRoute = require("./src/routes/SupportDeCoursRouter");

app.use("/user", userRoute);
app.use("/departement", DepartementRoute);
app.use(EnseignantRoute);
app.use(EtudiantRoute);
app.use(GroupeRoute);
app.use(FiliereRoute);
app.use(EvenementRoute);
app.use(MatiereRoute);
app.use(NoteRoute);
app.use(SupportDeCoursRoute);

const storage = multer.memoryStorage();
const upload = multer({ storage });
app.use(upload.single("pdf"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
server.listen(port, () => {
  console.log("Listening on port " + port);
});
