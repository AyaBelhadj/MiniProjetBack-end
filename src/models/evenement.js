const mongoose = require('mongoose');

// Step 1: Define a schema
const evenementSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        unique :true
      },
      isActive: {
        type: Boolean,
        default:true
      },
      id_demandeur:{
        
      }



 
});

// Step 2: Create a model
const departement = mongoose.model('Departement', departementSchema);
//module.exports = User.discriminator("Departement", departementSchema);
module.exports = departement;