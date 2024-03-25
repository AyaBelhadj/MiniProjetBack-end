


const Groupe = require("../models/groupe");
const Pdf = require("../models/Pdf");

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports={
    createGroupe: async (req, res) => {
      console.log('seleyem',req.body)
        const {nom,id_filiere} = req.body;
    
        if (!nom||!id_filiere ) {
          return res.status(400).json({ message: "Please enter all fields" });
        }
    
        try {
          const groupe = await Groupe.findOne({ nom });
          console.log(groupe);
          if (groupe) 
          {return res.status(409).json({ message: " Groupe already exists!" });}
    
         
          const newGroupe = new Groupe({
            nom,
            id_filiere  
          });
          console.log('seleyem',newGroupe)
          const savedGroupe = await newGroupe.save();
          if (!savedGroupe) {return res.status(401).json({ message: " SQL ERROR!" });}
       
    
          res.status(200).json({
            message: "groupe successfuly registred",
            groupe: savedGroupe,
          });
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },

      uploadFile : async (req, res) => {
        console.log('req.file is',req.file.fieldname)
        if (!req.file) {
          return res.status(400).json({ message: "Please enter the pdf file" });
      
        }
        try {
          const { originalname, buffer } = req.file;
          const idGroup = req.query.id;
              const pdf = new Pdf({
            name: originalname,
      
            data: buffer,
            description:"emploi_groupe"
          });
          await pdf.save();
          const groupe = await Groupe.findByIdAndUpdate({ _id: idGroup },{fichier_emploi :pdf._id }, {new:true}
            )
            if(!groupe){
             return res.status(500).json({
                message: "groupe file not uploaded ",
                
              });
            }
          res.status(200).json({
            message: "groupe file uploaded successfully ",
            
          });
        } catch (err) {
          console.error(err);
          res.status(500).json({
            message: `server Error : ${err.message}`,
            
          });
        }
      },
    updateGroupe: async (req, res) => {
        console.log('seleyem',req.body)
          const { nom,moyenne,id_filiere } = req.body;
      
          if (!nom ||!moyenne||!id_filiere ) {
            return res.status(400).json({ message: "Please enter all fields" });
          }
          
          try {
         

            const groupe = await Groupe.findOneAndUpdate({ nom: nom }, req.body, {new:true}
            ).then(async(groupe)=>{console.log("seleeeeyem",groupe);
            if (!groupe) {
              res.status(500).json({
                message: "groupe not updated ",
                
              });
            } else {
                res.status(200).json({
                message: "groupe updated successfuly ",
                data: groupe,
              });    
            }}) 
          } catch (e) {
            res.status(400).json({ error: e.message });
          }
        },
    archiverGroupe: async (req, res) => {
          console.log('seleyem',req.body)
            const { nom } = req.body;
        
            if (!nom  ) {
              return res.status(400).json({ message: "Please enter all fields" });
            }
        
            try {
              const groupe = await Groupe.findOneAndUpdate({ nom: nom }, {isActive:false}, {new:true}
                
              ).then((groupe)=>{console.log("seleeeeyem",groupe);
              if (!groupe) {
                res.status(500).json({
                  message: "groupe not deleted ",
                  
                });
              } else {
                res.status(200).json({
                  message: "groupe deleted successfuly ",
                  
                });
              }})
              
      
            } catch (e) {
              res.status(400).json({ error: e.message });
            }
          },
    activerGroupe: async (req, res) => {
            console.log('seleyem',req.body)
              const { nom } = req.body;
          
              if (!nom  ) {
                return res.status(400).json({ message: "Please enter all fields" });
              }
          
              try {
                const groupe = await Groupe.findOneAndUpdate({ nom: nom }, {isActive:true}, {new:true}
                  
                ).then((groupe)=>{console.log("seleeeeyem",groupe);
                  if (!groupe) {
                  res.status(500).json({
                  message: "groupe not recovered ",
                    
                  });
                } else {
                  res.status(200).json({
                  message: "groupe recovered successfuly ",
                    
                  });
                }})
                
        
              } catch (e) {
                res.status(400).json({ error: e.message });
              }
            },

    getGroupeByNameOrID: async (req, res) => {
            console.log('seleyem',req.query)
              const  nom  = req.query.nom;
              const id=req.query.id;
          
              if (!nom&&!id ) {
                return res.status(400).json({ message: "Please enter all fields" });
              }
          
              try {

                let groupe;
                if(nom){
                  groupe = await Groupe.findOne({ nom: nom })
                }
                else{
                  groupe = await Groupe.findOne({ _id: id })
                }
               
                
                if (!groupe) {
                  res.status(404).json({
                    message: "groupe not found ",
                    
                  });
                } else {
                  res.status(200).json({
                    message: "groupe found successfuly ",
                    data:groupe
                  });
                }
                
        
              } catch (e) {
                res.status(400).json({ error: e.message });
              }
            },
    getallGroupes: async (req, res) => {
            
          
              
              try {
                const groupe = await Groupe.find({isActive : true}
                ).then((groupe)=>{console.log("seleeeeyem",groupe);
                if (!groupe) {
                  res.status(404).json({
                    message: "groupe not found ",
                    
                  });
                } else {
                  res.status(200).json({
                    message: "groupe found successfuly ",
                    data:groupe
                  });
                }})
                
        
              } catch (e) {
                res.status(400).json({ error: e.message });
              }
            },

    getGroupsByFiliere:      async (req, res) => {
      const  id_filiere  = req.query.id_filiere;

          
              
      try {
        const groupe = await Groupe.find({isActive : true,id_filiere:id_filiere}
        ).then((groupe)=>{console.log("seleeeeyem",groupe);
        if (!groupe) {
          res.status(404).json({
            message: "groups not found ",
            
          });
        } else {
          res.status(200).json({
            message: "groups found successfuly ",
            data:groupe
          });
        }})
        

      } catch (e) {
        res.status(400).json({ error: e.message });
      }
    },   


}
