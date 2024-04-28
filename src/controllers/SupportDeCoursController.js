const Cours = require("../models/supportcours");
const Matiere = require("../models/matiere");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const Pdf = require("../models/Pdf");

module.exports = {
    
  createCours: async (req, res) => {
    console.log("seleyem", req.body);
    const { nom, id_matiere } = req.body;

    if (!nom || !id_matiere) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const cours = await Cours.findOne({ nom });

      console.log(cours);
      if (cours) {
        return res.status(409).json({ message: "Cours already exists!" });
      }

      const newCours = new Cours({
        nom,
        id_matiere,
      });
      console.log("seleyem", newCours);
      const savedCours = await newCours.save();
      if (!savedCours) {
        return res.status(401).json({ message: "Mongo ERROR!" });
      }

      res.status(200).json({
        message: "Cours successfully registered",
        data: savedCours,
      });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  uploadFile: async (req, res) => {
    console.log("req.file is", req.file.fieldname);
    if (!req.file) {
      return res.status(400).json({ message: "Please enter the pdf file" });
    }
    try {
      const { originalname, buffer } = req.file;
      const idCours = req.query.id;
      const pdf = new Pdf({
        name: originalname,

        data: buffer,
        description: "support_cours",
      });
      await pdf.save();
      const cours = await Cours.findByIdAndUpdate(
        { _id: idCours },
        { fichier: pdf._id },
        { new: true }
      );
      if (!cours) {
        return res.status(500).json({
          message: "cours file not uploaded ",
        });
      }
      res.status(200).json({
        message: "cours file uploaded successfully ",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: `server Error : ${err.message}`,
      });
    }
  },
  updateCours: async (req, res) => {
    console.log("seleyem", req.body);
    const { id, nom, id_matiere } = req.body;

    if (!nom || !id_matiere || !id) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const cours = await Cours.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
      }).then(async (cours) => {
        console.log("seleeeeyem", cours);
        if (!cours) {
          res.status(500).json({
            message: "cours not updated ",
          });
        } else {
          res.status(200).json({
            message: "cours updated successfully ",
            data: cours,
          });
        }
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  deleteCours: async (req, res) => {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Please provide the cours ID" });
      }

      const deletedCours = await Cours.findByIdAndDelete(id);

      if (!deletedCours) {
        return res.status(404).json({ message: "Cours not found" });
      }

      res.status(200).json({
        message: "Cours deleted successfully",
        data: deletedCours,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getCoursByNameOrID: async (req, res) => {
    console.log("seleyem", req.query);
    const nom = req.query.nom;
    const id = req.query.id;

    if (!nom && !id) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      let cours;
      if (nom) {
        cours = await Cours.findOne({ nom: nom }).populate([
          "id_matiere",
          "fichier",
        ]);
      } else {
        cours = await Cours.findOne({ _id: id }).populate([
          "id_matiere",
          "fichier",
        ]);
      }

      if (!cours) {
        res.status(404).json({
          message: "cours not found ",
        });
      } else {
        res.status(200).json({
          message: "cours found successfully ",
          data: cours,
        });
      }
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  getAllCours: async (req, res) => {
    try {
      const cours = await Cours.find({ fichier: { $ne: null } })
        .populate(["id_matiere", "fichier"])
        .then((cours) => {
          console.log("seleeeeyem", cours);
          if (!cours) {
            return res.status(404).json({
              message: "cours not found ",
            });
          } else {
            return res.status(200).json({
              message: "cours found successfully ",
              data: cours,
            });
          }
        });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  getCoursByNomMatiere: async (req, res) => {
    console.log("seleyem", req.query);
    const nom = req.query.nom;
    const id = req.query.id;

    if (!nom && !id) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      let cours;
      if (nom) {
        cours = await Cours.findOne({ nom: nom }).populate([
          "id_matiere",
          "fichier",
        ]);
      } else {
        cours = await Cours.findOne({ _id: id }).populate([
          "id_matiere",
          "fichier",
        ]);
      }

      if (!cours) {
        res.status(404).json({
          message: "cours not found ",
        });
      } else {
        res.status(200).json({
          message: "cours found successfully ",
          data: cours,
        });
      }
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  getCoursByNomMatiere: async (req, res) => {
    console.log("seleyem", req.query);
    const nom = req.query.nom;

    if (!nom) {
      return res.status(400).json({ message: "Please enter the subject name" });
    }
    if (!nom) {
      return res
        .status(400)
        .json({ message: "Please provide the name of the subject" });
    }

    const matiere = await Matiere.findOne({ nom: nom });
    if (!matiere) {
      res.status(404).json({
        message: "matiere not found for the given subject",
      });
    }
    try {
      const cours = await Cours.findOne({ id_matiere: matiere._id }).populate([
        "id_matiere",
        "fichier",
      ]);

      if (!cours) {
        return res.status(404).json({
          message: "No courses found for the given subject name",
        });
      }

      res.status(200).json({
        message: "Courses found successfully",
        data: cours,
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};
