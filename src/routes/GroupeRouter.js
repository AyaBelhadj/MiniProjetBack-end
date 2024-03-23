const express=require("express");
const groupeController=require("../controllers/GroupeController")
const userAuth=require('../middlewares/user-auth');
const adminAuth=require('../middlewares/admin-auth');
const ensAuth=require('../middlewares/enseignant-auth');
const adminAPI='/admin';
const ensAPI='/enseignant'
const etudAPI='/etudiant'
const userAPI='/user'
const route=express.Router();
// route.post("/createUser",userController.createuser)
// route.post("/login",userController.login)
// route.post("/changePwd",userAuth,userController.changePassword)
route.post(`${adminAPI}/createGroupe`,adminAuth,groupeController.createGroupe)
route.post(`${adminAPI}/updateGroupe`,adminAuth,groupeController.updateGroupe)

route.post(`${adminAPI}/archiverGroupe`,adminAuth,groupeController.archiverGroupe)
route.post(`${adminAPI}/activerGroupe`,adminAuth,groupeController.activerGroupe)
route.get(`${userAPI}/getGroupe`,userAuth,groupeController.getGroupeByNameOrID)

route.get(`${adminAPI}/getAllGroupes`,adminAuth,groupeController.getallGroupes)


module.exports=route;
