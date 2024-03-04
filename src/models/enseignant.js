const mongoose = require('mongoose');

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
   
 },
 grade: {
 type: String,
 required: true,
 
}
 
});

// Step 2: Create a model
//const enseignant = mongoose.model('Enseignant', userSchema);
module.exports = User.discriminator("Enseignant", enseignantSchema);
//module.exports = enseignant;