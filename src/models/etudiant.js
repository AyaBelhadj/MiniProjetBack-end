const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
//autoIncrement.initialize(mongoose.connection);
const User=require("./users");

// Step 1: Define a schema
const etudiantSchema = new mongoose.Schema({
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
     
   }
   ,
   numInscription: {
     type: Number,
     required: true,
     
   },
   isActive: {
    type: Boolean,
    default:true
  },
  id_groupe:{
    type:mongoose.Types.ObjectId,
    ref:'Groupe',
    //required :true,
    default :null// to change !! 
  }
 
});
// etudiantSchema.plugin(autoIncrement.plugin, {
//     model: 'Etudiant',
//     field: 'numInscription', // The field to auto-increment
//     startAt: 1, // Start incrementing from 1
//     incrementBy: 1 // Increment by 1
// });
// Step 2: Create a model
//const enseignant = mongoose.model('Enseignant', userSchema);
module.exports = User.discriminator("Etudiant", etudiantSchema);
//module.exports = enseignant;


