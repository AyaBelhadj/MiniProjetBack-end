const Matiere = require("../models/matiere")
module.exports={
    createMatiere: async (req, res) => {
      console.log('seleyem',req.body)
        const {nom,id_enseignant} = req.body;
    
        if (!nom ||!id_enseignant) {
          return res.status(400).json({ message: "Please enter all fields" });
        }
    
        try {
          //to ignore case
          const matiere = await Matiere.findOne({ nom });
          
          console.log(matiere);
         if (matiere){
          {return res.status(409).json({ message: " Matiere already exists!" });}
         }
    
         
          const newMatiere = new Matiere({
            nom 
            ,id_enseignant
          });
          console.log('seleyem',newMatiere)
          const savedMatiere = await newMatiere.save();
          if (!savedMatiere) {return res.status(401).json({ message: " SQL ERROR!" });}
       
    
          res.status(200).json({
            message: "Matiere successfuly registred",
            data: savedMatiere,
          });
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
   
    updateMatiere: async (req, res) => {
        console.log('seleyem',req.body)
          const { id,nom,id_enseignant} = req.body;
      
          if (!nom ||!id_enseignant||!id) {
            return res.status(400).json({ message: "Please enter all fields" });
          }
          
          try {
         
            const matiere = await Matiere.findByIdAndUpdate({_id:id}, req.body, {new:true}
            ).then(async(matiere)=>{console.log("seleeeeyem",matiere);
            if (!matiere) {
                res.status(500).json({
                message: "matiere not updated ",
                
              });
            } else {
                res.status(200).json({
                message: "matiere updated successfuly ",
                data: matiere,
              });    
            }}) 
            
          } catch (e) {
            res.status(400).json({ error: e.message });
          }
        },
   activerMatiere: async (req, res) => {
          console.log('seleyem',req.body)
            const { id } = req.body;
        
            if (!id  ) {
              return res.status(400).json({ message: "Please enter all fields" });
            }
        
            try {
              const matiere = await Matiere.findOneAndUpdate({ _id: id }, {isActive:true}, {new:true}
                
              ).then((matiere)=>{console.log("seleeeeyem",matiere);
              if (!matiere) {
                res.status(500).json({
                  message: "matiere not recovered ",
                  
                });
              } else {
                res.status(200).json({
                  message: "matiere recovered successfuly ",
                  
                });
              }})
              
      
            } catch (e) {
              res.status(400).json({ error: e.message });
            }
          },
  archiverMatiere: async (req, res) => {
            console.log('seleyem',req.body)
              const { id } = req.body;
          
              if (!id  ) {
                return res.status(400).json({ message: "Please enter all fields" });
              }
          
              try {
                const matiere = await Matiere.findOneAndUpdate({ _id: id }, {isActive:false}, {new:true}
                  
                ).then((matiere)=>{console.log("seleeeeyem",matiere);
                if (!matiere) {
                  res.status(500).json({
                    message: "matiere not deleted ",
                    
                  });
                } else {
                  res.status(200).json({
                    message: "matiere deleted successfuly ",
                    
                  });
                }})
                
        
              } catch (e) {
                res.status(400).json({ error: e.message });
              }
            },
  getMatiereByNameOrID: async (req, res) => {
        console.log('seleyem',req.query)
          const  nom  = req.query.nom;
          const id=req.query.id;
      
          if (!nom&&!id ) {
            return res.status(400).json({ message: "Please enter all fields" });
          }
      
          try {

            let matiere;
            if(nom){
              matiere = await Matiere.findOne({ nom: nom })
            }
            else{
              matiere = await Matiere.findOne({ _id: id })
            }
           
            
            if (!matiere) {
              res.status(404).json({
                message: "matiere not found ",
                
              });
            } else {
              res.status(200).json({
                message: "matiere found successfuly ",
                data:matiere
              });
            }
            
    
          } catch (e) {
            res.status(400).json({ error: e.message });
          }
        },
    getAllMatieres: async (req, res) => {
         try {
                const matiere = await Matiere.find({isActive : true}
                ).then((matiere)=>{console.log("seleeeeyem",matiere);
                if (!matiere) {
                  res.status(404).json({
                    message: "matiere not found ",
                    
                  });
                } else {
                  res.status(200).json({
                    message: "matiere found successfuly ",
                    data:matiere
                  });
                }})
                
        
              } catch (e) {
                res.status(400).json({ error: e.message });
              }
            }


}
