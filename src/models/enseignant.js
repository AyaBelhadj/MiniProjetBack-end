const mongoose = require('mongoose');
const User=require('./users')

// Step 1: Define a schema
const enseignantSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
      },
      prenom: {
        type: String,
        required: true
      },
      adresse: {
        type: String,
        required: true,
        
      },
    dateNaiss: {
    type: Date,
    required: true,

  },
     numTel: {
     type: String,
     required: true,
     
   },
   matricule: {
   type: String,
   required: true,
   unique:true
   
 },
 grade: {
 type: String,
 required: true,
 
},
isActive: {
  type: Boolean,
  default:true
},
  chef_departement:{
  type:mongoose.Types.ObjectId,
  ref:'Enseignant'
  ,default :null
},
   id_departement:
{
  type:mongoose.Types.ObjectId,
  ref:'Departement'
  ,required :true
} ,
fichier_emploi: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Pdf',
  default:null
},
});

// Step 2: Create a model
//const enseignant = mongoose.model('Enseignant', userSchema);
module.exports = User.discriminator("Enseignant", enseignantSchema);
//module.exports = enseignant;