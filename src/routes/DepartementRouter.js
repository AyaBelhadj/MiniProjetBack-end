const express=require("express");
const departementController=require("../controllers/DepartementController")
const userAuth=require('../middlewares/user-auth');
const adminAuth=require('../middlewares/admin-auth');
const route=express.Router();
// route.post("/createUser",userController.createuser)
// route.post("/login",userController.login)
// route.post("/changePwd",userAuth,userController.changePassword)
route.post("/createDepartement",adminAuth,departementController.createdepartement)
route.post("/updateDepartement",adminAuth,departementController.updatedepartement)
route.post("/archiverDepartement",adminAuth,departementController.archiverdepartement)
route.post("/activerDepartement",adminAuth,departementController.activerdepartement)
route.get("/getDepartement",userAuth,departementController.getdepartementByNameOrID)
route.get("/getAllDepartements",userAuth,departementController.getalldepartement)


module.exports=route;
