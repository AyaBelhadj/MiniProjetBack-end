const express=require("express");
const enseignantController=require("../controllers/EnseignantController")
const userAuth=require('../middlewares/user-auth');
const adminAuth=require('../middlewares/admin-auth');
const route=express.Router();
// route.post("/createUser",userController.createuser)
// route.post("/login",userController.login)
// route.post("/changePwd",userAuth,userController.changePassword)
route.post("/createEnseignant",adminAuth,enseignantController.createEnseignant)
module.exports=route;
