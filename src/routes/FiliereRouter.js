const express=require("express");
const filiereController=require("../controllers/FiliereController")
const userAuth=require('../middlewares/user-auth');
const adminAuth=require('../middlewares/admin-auth');
const eutudAuth=require('../middlewares/etudiant-auth');
const ensAuth=require('../middlewares/enseignant-auth');
const adminAPI='/admin';
const ensAPI='/enseignant';
const etudAPI='/etudiant';
const route=express.Router();
route.post(`${adminAPI}/createFiliere`,adminAuth,filiereController.createFiliere)
route.post(`${adminAPI}/updateFiliere`,adminAuth,filiereController.updateFiliere)
//  route.post(`${etudAPI}/updateFiliere`,eutudAuth,filiereController.updateFiliere)
  route.post(`${adminAPI}/archiverFiliere`,adminAuth,filiereController.archiverFiliere)
  route.post(`${adminAPI}/activerFiliere`,adminAuth,filiereController.activerFiliere)

 route.get(`${adminAPI}/getFiliere`,adminAuth,filiereController.getFiliereByID)
 route.get(`${ensAPI}/getFiliereByDep`,ensAuth,filiereController.getFiliereByDep)
// route.get(`${etudAPI}/getFiliere`,eutudAuth,filiereController.getFiliereByEmailOrNumInscription)
 route.get(`${adminAPI}/getAllFilieres`,adminAuth,filiereController.getallFilieres)




module.exports=route;
