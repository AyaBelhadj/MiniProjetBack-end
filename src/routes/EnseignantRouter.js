const express=require("express");
const enseignantController=require("../controllers/EnseignantController")
const userAuth=require('../middlewares/user-auth');
const adminAuth=require('../middlewares/admin-auth');
const ensAuth=require('../middlewares/enseignant-auth');
const adminAPI='/admin';
const ensAPI='/enseignant';
const route=express.Router();
// route.post("/createUser",userController.createuser)
// route.post("/login",userController.login)
// route.post("/changePwd",userAuth,userController.changePassword)
route.post(`${adminAPI}/createEnseignant`,adminAuth,enseignantController.createEnseignant)
route.post(`${adminAPI}/updateEnseignant`,adminAuth,enseignantController.updateEnseignant)
route.post(`${ensAPI}/updateEnseignant`,ensAuth,enseignantController.updateEnseignant)
route.post(`${adminAPI}/archiverEnseignant`,adminAuth,enseignantController.archiverenseignant)
route.get(`${adminAPI}/getEnseignant`,adminAuth,enseignantController.getenseignantByEmailOrMatricule)
route.get(`${ensAPI}/getEnseignant`,ensAuth,enseignantController.getenseignantByEmailOrMatricule)
route.get(`${adminAPI}/getAllEnseignants`,adminAuth,enseignantController.getallenseignant)




module.exports=route;
