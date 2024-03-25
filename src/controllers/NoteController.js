const Note = require("../models/note");
const Matiere=require('../models/matiere')

module.exports = {
  createNote: async (req, res) => {
    try {
      const { id_etudiant, id_matiere, note, annee_universitaire } = req.body;

      if (!id_etudiant || !id_matiere || !note || !annee_universitaire) {
        return res.status(400).json({ message: "Please enter all fields" });
      }

      const newNote = new Note({
        id_etudiant,
        id_matiere,
        note,
        annee_universitaire
      });

      const savedNote = await newNote.save();

      res.status(200).json({
        message: "Note successfully registered",
        data: savedNote,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateNote: async (req, res) => {
    try {
      const { id, id_etudiant, id_matiere, note, annee_universitaire } = req.body;

      if (!id || !id_etudiant || !id_matiere || !note || !annee_universitaire) {
        return res.status(400).json({ message: "Please enter all fields" });
      }

      const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true });

      if (!updatedNote) {
        return res.status(404).json({ message: "Note not found" });
      }

      res.status(200).json({
        message: "Note updated successfully",
        data: updatedNote,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteNote: async (req, res) => {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Please provide the note ID" });
      }

      const deletedNote = await Note.findByIdAndDelete(id);

      if (!deletedNote) {
        return res.status(404).json({ message: "Note not found" });
      }

      res.status(200).json({
        message: "Note deleted successfully",
        data: deletedNote,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getNoteByID: async (req, res) => {
    try {
    //   const  nom  = req.query.nom;
      const id=req.query.id;

      if (/*!nom&&*/!id ) {
        return res.status(400).json({ message: "Please enter all fields" });
      }

      /*let note;
      if(nom){
        note = await Note.findOne({ nom: nom })
      }
      else{*/
       const note = await Note.findOne({ _id: id })
     // }

      if (!note) {
        res.status(404).json({
          message: "Note not found ",
        });
      } else {
        res.status(200).json({
          message: "Note found successfully ",
          data:note
        });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllNotes: async (req, res) => {
    try {
      const notes = await Note.find();

      res.status(200).json({
        message: "All notes fetched successfully",
        data: notes,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getAllNotesByEtudiant: async (req, res) => {
    try {
      const  id_etudiant  = req.query.id_etudiant;

      if (!id_etudiant) {
        return res.status(400).json({ message: "Please provide the student ID" });
      }

      const notes = await Note.find({ id_etudiant: id_etudiant });

      res.status(200).json({
        message: "All notes fetched successfully for the student",
        data: notes,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getAllNotesByCurrentEtudiant: async (req, res) => {
    try {
      const  id_etudiant  = req.user.userId;

      if (!id_etudiant) {
        return res.status(400).json({ message: "Please provide the student ID" });
      }

      const notes = await Note.find({ id_etudiant: id_etudiant });

      res.status(200).json({
        message: "All notes fetched successfully for the student",
        data: notes,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getNoteByNomMatiere: async (req, res) => {
    try {
      const { nom_matiere } = req.query;
      const  id_etudiant  = req.user.userId;

      if (!id_etudiant) {
        return res.status(400).json({ message: "Please provide the student ID" });
      }

      if (!nom_matiere) {
        return res.status(400).json({ message: "Please provide the name of the subject" });
      }


      const matiere = await Matiere.findOne({ nom: nom_matiere });
if (!matiere){
  res.status(404).json({
    message: "matiere not found for the given subject",
  });
}
const note=await Note.findOne({ id_matiere: matiere._id,id_etudiant:id_etudiant });
      if (!note) {
        res.status(404).json({
          message: "Note not found for the given subject",
        });
      } else {
        res.status(200).json({
          message: "Note found successfully for the given subject",
          data: {note:note,matiere:matiere},
        });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

};
