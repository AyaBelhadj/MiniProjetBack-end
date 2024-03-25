
const express = require('express');
const app = express();
const port = 5700;
const http = require("http");
const mongoose = require('mongoose');
const db = require('./src/DBconfig/mongoose')
const cors=require("cors")
const multer = require('multer');
const Pdf = require('./src/models/Pdf');

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








const storage = multer.memoryStorage();
const upload = multer({ storage });
app.use(upload.single('pdf'));
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    console.log("Uploaded file:", req.file);

    const { originalname, buffer } = req.file;
    const pdf = new Pdf({
      name: originalname,
      data: buffer
    });
    await pdf.save();
    res.status(201).send('File uploaded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

/*
const multer = require('multer');
 const storage = multer.memoryStorage(); 
 const upload = multer({ storage });
 app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }

    const { originalname, buffer } = req.file;
    console.log("File uploaded:", originalname);
    
    // Further processing of the uploaded file, if needed

    res.status(201).send('File uploaded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});*/
server.listen(port, () => {
  console.log('Listening on port ' + port);
});
