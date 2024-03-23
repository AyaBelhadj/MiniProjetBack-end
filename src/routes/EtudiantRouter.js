const express=require("express");
const etudiantController=require("../controllers/EtudiantController")
const userAuth=require('../middlewares/user-auth');
const adminAuth=require('../middlewares/admin-auth');
const eutudAuth=require('../middlewares/etudiant-auth');
const adminAPI='/admin';
const etudAPI='/etudiant';
const route=express.Router();
route.post(`${adminAPI}/createEtudiant`,adminAuth,etudiantController.createEtudiant)
 route.post(`${adminAPI}/updateEtudiant`,adminAuth,etudiantController.updateEtudiant)
 route.post(`${etudAPI}/updateEtudiant`,eutudAuth,etudiantController.updateEtudiant)
 route.post(`${adminAPI}/archiverEtudiant`,adminAuth,etudiantController.archiverEtudiant)
 route.post(`${adminAPI}/activerEtudiant`,adminAuth,etudiantController.activerEtudiant)

route.get(`${adminAPI}/getEtudiant`,adminAuth,etudiantController.getetudiantByEmailOrNumInscription)
route.get(`${etudAPI}/getEtudiant`,eutudAuth,etudiantController.getetudiantByEmailOrNumInscription)
route.get(`${adminAPI}/getAllEtudiants`,adminAuth,etudiantController.getallEtudiant)




module.exports=route;
