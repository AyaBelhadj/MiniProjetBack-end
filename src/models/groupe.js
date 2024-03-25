const mongoose = require('mongoose');

// Step 1: Define a schema
const groupeSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        unique :true
      },
      id_filiere: {
        type: mongoose.Schema.Types.ObjectId,
        ref :'Filiere', 
        
        required:true
    },
      
      isActive: {
        type: Boolean,
        default:true
      },
      // liste_etudiants :
      //   [{ type: mongoose.Schema.Types.ObjectId, ref: 'Etudiant' }]
      //  ,
       moyenne:{
        type :Number,
        default : null 
    } ,
    fichier_emploi: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pdf',
      default:null
    },

      




 
});

// Step 2: Create a model
const groupe = mongoose.model('Groupe', groupeSchema);
//module.exports = User.discriminator("Departement", departementSchema);
module.exports = groupe;