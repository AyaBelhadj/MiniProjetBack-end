const express=require("express");
const evenementController=require("../controllers/EvenementController")
const userAuth=require('../middlewares/user-auth');
const adminAuth=require('../middlewares/admin-auth');
const ensAuth=require('../middlewares/enseignant-auth');
const adminAPI='/admin';
const userAPI='/user'
const ensAPI='/enseignant'
const route=express.Router();
route.post(`${userAPI}/createEvenement`,userAuth,evenementController.createEvenement)
route.get(`${userAPI}/getEvenementByNameOrID`,userAuth,evenementController.getEvenementByNameOrID)
route.get(`${userAPI}/getAllEvenements`,userAuth,evenementController.getAllEvenements)


route.post(`${adminAPI}/accepterEvenement`,adminAuth,evenementController.accepterEvenement)
route.post(`${adminAPI}/archiverEvenement`,evenementController.archiverEvenement)
route.post(`${adminAPI}/activerEvenement`,adminAuth,evenementController.activerEvenement)
route.post(`${ensAPI}/updateEvenement`,ensAuth,evenementController.updateEvenement)




module.exports=route;
