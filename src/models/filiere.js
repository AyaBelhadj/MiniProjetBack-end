const mongoose = require("mongoose");

// Step 1: Define a schema
const filiereSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  niveau: {
    type: String,
    required: true,
  },
  id_departement: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Departement",
  },
});

/*const departement_filiere_Schema = new mongoose.Schema({
    
      id_Departement: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref :'Departement', 
        unique:true
      },
      id_filiere:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Filiere'
      }
});
*/

// Step 2: Create a model
const filiere = mongoose.model("Filiere", filiereSchema);
//const departement_filiere = mongoose.model('departement_filiere', departement_filiere_Schema);
//module.exports = {filiere,departement_filiere};
module.exports = filiere;
