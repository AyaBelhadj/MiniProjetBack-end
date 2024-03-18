//TODO:envoyer un mail lors de la creation d un enseignant


const Enseignant=require("../models/enseignant");
const User=require("../models/users");
const Departement=require('../models/departement')
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken"); 
const nodemailer = require("nodemailer");
const generatedPwd=require('../utils/generatePassword');
module.exports={
    createEnseignant: async (req, res) => {
      console.log('seleyem',req.body)
        const { nom,prenom,adresse,dateNaiss,numTel,matricule,grade,email,departementEns } = req.body;
    
        if (!nom ||!prenom||! adresse||!matricule || !dateNaiss||! numTel||!grade||!email||!departementEns) {
          return res.status(400).json({ message: "Please enter all fields" });
        }
    
        try {
          
    
          const user = await User.findOne({ email });
          console.log(user);
          if (user) 
          {
          const enseignant = await Enseignant.findOne({ matricule });
          console.log(enseignant);
          if (enseignant) 
          {return res.status(409).json({ message: " Enseignant already exists!" });}
          
          else {return res.status(409).json({ message: " user already exists!" });}
         }
         const departement=await Departement.findOne({ nom:departementEns });
         if (!departement){
            return res.status(404).json({ message: " Departement not found!" });
         }
         const chefDep= departement.Chef_Departement;
         const salt = await bcrypt.genSalt(10);
         if (!salt) throw Error("Something went wrong with bcrypt");
         const password=generatedPwd();
         const hash = await bcrypt.hash(password, salt);
         if (!hash) throw Error("Something went wrong hashing the password");
         const role='enseignant';
       
         const newEnseignant = new Enseignant({
           role:role,
           email:email,
           password: hash,
           nom:nom,
           prenom:prenom,
           adresse:adresse,
           dateNaiss:dateNaiss,
           numTel:numTel,
           matricule:matricule,
           grade:grade,
           chef_departement:chefDep,
           id_departement:departement._id
         });
         console.log('seleyem',newEnseignant)
         const savedEnseignant = await newEnseignant.save();
         if (!savedEnseignant) throw Error("Something went wrong saving the enseignant");
   
        
    
          res.status(200).json({
            message: "enseignant successfuly registred",
            enseignant: savedEnseignant,
          });
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    updateEnseignant: async (req, res) => {
        console.log('seleyem',req.body)
          const { nom,Chef_Departement } = req.body;
      
          if (!nom || !Chef_Departement ) {
            return res.status(400).json({ message: "Please enter all fields" });
          }
      
          try {
            const departement = await Departement.findOne({ nom });
            console.log(departement);
            if (departement) 
            {return res.status(409).json({ message: " Departement already exists!" });}
      
           
            const newDepartement = new Departement({
              nom,
              Chef_Departement,
              
            });
            console.log('seleyem',newDepartement)
            const savedDepartement = await newDepartement.save();
            if (!savedDepartement) {return res.status(401).json({ message: " SQL ERROR!" });}
         
      
            res.status(200).json({
              message: "departement successfuly registred",
              departement: savedDepartement,
            });
          } catch (e) {
            res.status(400).json({ error: e.message });
          }
        }


}
