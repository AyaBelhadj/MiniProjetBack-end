const express=require("express");
const noteController=require("../controllers/NoteController")
const userAuth=require('../middlewares/user-auth');
const etudAuth=require('../middlewares/etudiant-auth');
const adminAuth=require('../middlewares/admin-auth');
const ensAuth=require('../middlewares/admin-auth');
const ensAPI='/enseignant';
const etudAPI='/etudiant';
const userAPI='/user'
const adminAPI='/admin'

const route=express.Router();
route.post(`${ensAPI}/createNote`,ensAuth,noteController.createNote)
route.post(`${ensAPI}/updateNote`,ensAuth,noteController.updateNote)
 route.post(`${ensAPI}/deleteNote`,ensAuth,noteController.deleteNote)
 route.get(`${userAPI}/getNoteByID`,userAuth,noteController.getNoteByID)
 route.get(`${userAPI}/getAllNotes`,userAuth,noteController.getAllNotes)

 route.get(`${ensAPI}/getAllNotesByEtudiant`,ensAuth,noteController.getAllNotesByEtudiant)
 //route.get(`${ensAPI}/getNoteByNomMatiere`,ensAuth,noteController.getNoteByNomMatiere)
 route.get(`${etudAPI}/getNoteByNomMatiere`,etudAuth,noteController.getNoteByNomMatiere)

 route.get(`${adminAPI}/getAllNotesByEtudiant`,adminAuth,noteController.getAllNotesByEtudiant)


 route.get(`${etudAPI}/getAllNotesByCurrentEtudiant`,etudAuth,noteController.getAllNotesByCurrentEtudiant)







module.exports=route;
