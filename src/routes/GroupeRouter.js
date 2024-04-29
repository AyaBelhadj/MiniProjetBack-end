const express=require("express");
const groupeController=require("../controllers/GroupeController")
const userAuth=require('../middlewares/user-auth');
const adminAuth=require('../middlewares/admin-auth');
const ensAuth=require('../middlewares/enseignant-auth');
require("dotenv").config();

const adminAPI='/admin';
const ensAPI='/enseignant'
const etudAPI='/etudiant'
const userAPI='/user'
const fileUrl = process.env.fileURL;



const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${fileUrl}/group`)
    },
    filename: function (req, file, cb) 
    { 
         cb(null, file.originalname); 
        console.log('coucouuuuuu',req.query.id)
    },

  })
const upload = multer({ storage });


const route=express.Router();

route.post(`${adminAPI}/createGroupe`,adminAuth,groupeController.createGroupe)
route.post(`${adminAPI}/group/uploadFile`, upload.single('pdf'), adminAuth, groupeController.uploadFile);

route.post(`${adminAPI}/updateGroupe`,adminAuth,groupeController.updateGroupe)
route.get(`${adminAPI}/getGroupsByFiliere`,adminAuth,groupeController.getGroupsByFiliere)
route.get(`${ensAPI}/getGroupsByFiliere`,ensAuth,groupeController.getGroupsByFiliere)

route.post(`${adminAPI}/archiverGroupe`,adminAuth,groupeController.archiverGroupe)
route.post(`${adminAPI}/activerGroupe`,adminAuth,groupeController.activerGroupe)
route.get(`${userAPI}/getGroupe`,userAuth,groupeController.getGroupeByNameOrID)
route.get(`${adminAPI}/getAllGroupes`,adminAuth,groupeController.getallGroupes)


module.exports=route;
