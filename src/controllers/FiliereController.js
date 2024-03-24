const Filiere = require("../models/filiere")//.filiere;
//const DepFiliere = require("../models/filiere").departement_filiere;
module.exports={
    createFiliere: async (req, res) => {
      console.log('seleyem',req.body)
        const {nom,niveau,id_departement} = req.body;
    
        if (!nom ||!niveau||!id_departement) {
          return res.status(400).json({ message: "Please enter all fields" });
        }
    
        try {
          //to ignore case
          const filiere = await Filiere.findOne({ nom: { $regex: new RegExp(`^${nom}$`, 'i') }, niveau: { $regex: new RegExp(`^${niveau}$`, 'i') } });
          
          console.log(filiere);
         if (filiere){
          {return res.status(409).json({ message: " Filiere already exists!" });}
         }
    
         
          const newFiliere = new Filiere({
            nom 
            ,niveau,
            id_departement
          });
          console.log('seleyem',newFiliere)
          const savedFiliere = await newFiliere.save();
          if (!savedFiliere) {return res.status(401).json({ message: " SQL ERROR!" });}
       
    
          res.status(200).json({
            message: "filiere successfuly registred",
            data: savedFiliere,
          });
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    updateFiliere: async (req, res) => {
        console.log('seleyem',req.body)
          const { nom ,niveau,id,id_departement} = req.body;
      
          if (!nom ||!niveau||!id||!id_departement ) {
            return res.status(400).json({ message: "Please enter all fields" });
          }
          
          try {
         

            const filiere = await Filiere.findOneAndUpdate({ _id: id }, req.body, {new:true}
            ).then(async(filiere)=>{console.log("seleeeeyem",filiere);
            if (!filiere) {
                res.status(500).json({
                message: "filiere not updated ",
                
              });
            } else {
                res.status(200).json({
                message: "filiere updated successfuly ",
                data: filiere,
              });    
            }}) 
          } catch (e) {
            res.status(400).json({ error: e.message });
          }
        },
    archiverFiliere: async (req, res) => {
          console.log('seleyem',req.body)
            const { id } = req.body;
        
            if (!id  ) {
              return res.status(400).json({ message: "Please enter all fields" });
            }
        
            try {
              const filiere = await Filiere.findOneAndUpdate({ _id: id }, {isActive:false}, {new:true}
                
              ).then((filiere)=>{console.log("seleeeeyem",filiere);
              if (!filiere) {
                res.status(500).json({
                  message: "filiere not deleted ",
                  
                });
              } else {
                res.status(200).json({
                  message: "filiere deleted successfuly ",
                  
                });
              }})
              
      
            } catch (e) {
              res.status(400).json({ error: e.message });
            }
          },
    activerFiliere:async (req, res) => {
      console.log('seleyem',req.body)
        const { id } = req.body;
    
        if (!id  ) {
          return res.status(400).json({ message: "Please enter all fields" });
        }
    
        try {
          const filiere = await Filiere.findOneAndUpdate({ _id: id }, {isActive:true}, {new:true}
            
          ).then((filiere)=>{console.log("seleeeeyem",filiere);
          if (!filiere) {
            res.status(500).json({
              message: "filiere not recovered ",
              
            });
          } else {
            res.status(200).json({
              message: "filiere recovered successfuly ",
              
            });
          }})
          
  
        } catch (e) {
          res.status(400).json({ error: e.message });
        }
      },

    getFiliereByID: async (req, res) => {
            console.log('seleyem',req.query)
             
              const id=req.query.id;
          
              if (!id ) {
                return res.status(400).json({ message: "Please enter all fields" });
              }
          
              try {

             
               const   filiere = await Filiere.findOne({ _id: id })
              
               
                
                if (!filiere) {
                  res.status(404).json({
                    message: "filiere not found ",
                    
                  });
                } else {
                  res.status(200).json({
                    message: "filiere found successfuly ",
                    data:filiere
                  });
                }
                
        
              } catch (e) {
                res.status(400).json({ error: e.message });
              }
            },
    getallFilieres: async (req, res) => {
         try {
                const filiere = await Filiere.find({isActive : true}
                ).then((filiere)=>{console.log("seleeeeyem",filiere);
                if (!filiere) {
                  res.status(404).json({
                    message: "filiere not found ",
                    
                  });
                } else {
                  res.status(200).json({
                    message: "filiere found successfuly ",
                    data:filiere
                  });
                }})
                
        
              } catch (e) {
                res.status(400).json({ error: e.message });
              }
            }


}
