const express=require("express");
const matiereController=require("../controllers/MatiereController")
const userAuth=require('../middlewares/user-auth');
const adminAuth=require('../middlewares/admin-auth');
const adminAPI='/admin';
const userAPI='/user'
const route=express.Router();
route.post(`${adminAPI}/createMatiere`,adminAuth,matiereController.createMatiere)
route.post(`${adminAPI}/updateMatiere`,adminAuth,matiereController.updateMatiere)
 route.post(`${adminAPI}/archiverMatiere`,adminAuth,matiereController.archiverMatiere)
 route.post(`${adminAPI}/activerMatiere`,adminAuth,matiereController.activerMatiere)
 route.get(`${userAPI}/getMatiereByNameOrID`,userAuth,matiereController.getMatiereByNameOrID)
 route.get(`${userAPI}/getAllMatieres`,userAuth,matiereController.getAllMatieres)






module.exports=route;
