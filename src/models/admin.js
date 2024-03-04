const mongoose = require('mongoose');

// Step 1: Define a schema
const adminSchema = new mongoose.Schema({
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
 
});

// Step 2: Create a model
//const enseignant = mongoose.model('Enseignant', userSchema);
module.exports = User.discriminator("Enseignant", adminSchema);
//module.exports = enseignant;