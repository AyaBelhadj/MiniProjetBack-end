const mongoose = require('mongoose');

// Step 1: Define a schema
const departementSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        unique :true
      },
      Chef_Departement: {
        type: mongoose.Schema.Types.ObjectId,
        ref :'Enseignant', 
        unique:true,
        default:null
      },
      
      isActive: {
        type: Boolean,
        default:true
      }



 
});

// Step 2: Create a model
const departement = mongoose.model('Departement', departementSchema);
//module.exports = User.discriminator("Departement", departementSchema);
module.exports = departement;