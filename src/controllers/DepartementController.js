//TODO:creation depts with a list


const Departement=require("../models/departement");
const Enseignant=require('../models/enseignant')

const jwt = require("jsonwebtoken"); 
const nodemailer = require("nodemailer");
const departement = require("../models/departement");

module.exports={
    createdepartement: async (req, res) => {
      console.log('seleyem',req.body)
        const {nom} = req.body;
    
        if (!nom ) {
          return res.status(400).json({ message: "Please enter all fields" });
        }
    
        try {
          const departement = await Departement.findOne({ nom });
          console.log(departement);
          if (departement) 
          {return res.status(409).json({ message: " Departement already exists!" });}
    
         
          const newDepartement = new Departement({
            nom,  
          });
          console.log('seleyem',newDepartement)
          const savedDepartement = await newDepartement.save();
          if (!savedDepartement) {return res.status(401).json({ message: " SQL ERROR!" });}
       
    
          res.status(200).json({
            message: "departement successfuly registred",
            departement: savedDepartement,
          });
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    updatedepartement: async (req, res) => {
        console.log('seleyem',req.body)
          const { nom,Chef_Departement,_id } = req.body;
      
          if (!nom || !Chef_Departement||!_id ) {
            return res.status(400).json({ message: "Please enter all fields" });
          }
          
          try {
            const olddept = await Departement.findOne({ _id: _id })
            if (!olddept){
              res.status(404).json({
                message: "departement not found "});
            }
            if (Chef_Departement!==olddept.chef_departement){
              const ens = await Enseignant.findByIdAndUpdate({ _id: Chef_Departement }, {chef_departement:null}, {new:true})
              if (!ens){
               res.status(404).json({
                 message: "chef departement not found ",
                 
               }); }
               if(olddept.chef_departement)
               {const oldens = await Enseignant.findByIdAndUpdate({ _id: olddept.Chef_Departement }, {chef_departement:Chef_Departement}, {new:true})

              if (!oldens){
               res.status(404).json({
                 message: "chef departement not found ",
                 
               }); }}


            }

            const dept = await Departement.findByIdAndUpdate({ _id: _id }, req.body, {new:true}
            ).then(async(departement)=>{console.log("seleeeeyem",departement);
            if (!departement) {
              res.status(500).json({
                message: "departement not updated ",
                
              });
            } else {
                res.status(200).json({
                message: "departement updated successfuly ",
                data: departement,
              });    
            }}) 
          } catch (e) {
            res.status(400).json({ error: e.message });
          }
        },
    archiverdepartement: async (req, res) => {
          console.log('seleyem',req.body)
            const { nom } = req.body;
        
            if (!nom  ) {
              return res.status(400).json({ message: "Please enter all fields" });
            }
        
            try {
              const dept = await Departement.findOneAndUpdate({ nom: nom }, {isActive:false}, {new:true}
                
              ).then((departement)=>{console.log("seleeeeyem",departement);
              if (!departement) {
                res.status(500).json({
                  message: "departement not deleted ",
                  data: null,
                });
              } else {
                res.status(200).json({
                  message: "departement deleted successfuly ",
                  
                });
              }})
              
      
            } catch (e) {
              res.status(400).json({ error: e.message });
            }
          },
    activerdepartement: async (req, res) => {
            console.log('seleyem',req.body)
              const { nom } = req.body;
          
              if (!nom  ) {
                return res.status(400).json({ message: "Please enter all fields" });
              }
          
              try {
                const dept = await Departement.findOneAndUpdate({ nom: nom }, {isActive:true}, {new:true}
                  
                ).then((departement)=>{console.log("seleeeeyem",departement);
                if (!departement) {
                  res.status(500).json({
                    message: "departement not recovered ",
                    data: null,
                  });
                } else {
                  res.status(200).json({
                    message: "departement recovered successfuly ",
                    
                  });
                }})
                
        
              } catch (e) {
                res.status(400).json({ error: e.message });
              }
            },

    getdepartementByNameOrID: async (req, res) => {
            console.log('seleyem',req.query)
              const  nom  = req.query.nom;
              const id=req.query.id;
          
              if (!nom&&!id ) {
                return res.status(400).json({ message: "Please enter all fields" });
              }
          
              try {

                let departement;
                if(nom){
                  departement = await Departement.findOne({ nom: nom })
                }
                else{
                  departement = await Departement.findOne({ _id: id })
                }
               
                
                if (!departement) {
                  res.status(404).json({
                    message: "departement not found ",
                    data: null,
                  });
                } else {
                  res.status(200).json({
                    message: "departement found successfuly ",
                    data:departement
                  });
                }
                
        
              } catch (e) {
                res.status(400).json({ error: e.message });
              }
            },
    getalldepartement: async (req, res) => {
            
          
              
              try {
                const dept = await Departement.find({isActive : true}
                ).then((departement)=>{console.log("seleeeeyem",departement);
                if (!departement) {
                  res.status(404).json({
                    message: "departement not found ",
                    data: null,
                  });
                } else {
                  res.status(200).json({
                    message: "departement found successfuly ",
                    data:departement
                  });
                }})
                
        
              } catch (e) {
                res.status(400).json({ error: e.message });
              }
            }


}
