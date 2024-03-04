const express=require("express");
const userController=require("../controllers/UserController")
const userAuth=require('../middlewares/user-auth');
const route=express.Router();
route.post("/createUser",userController.createuser)
route.post("/login",userController.login)
route.post("/changePwd",userAuth,userController.changePassword)
route.post("/forgotPwd",userAuth,userController.forgotpassword)
module.exports=route;
