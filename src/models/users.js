const mongoose = require('mongoose');

// Step 1: Define a schema
const userSchema = new mongoose.Schema({
   
      password: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        required: true,
        default:"https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png"
      },
 email: {
    type: String,
    required: true,
    unique: true // Ensure email is unique
  },
  role: {
    type: String,
    enum: ['admin', 'enseignant', 'etudiant', 'chefDepartement'], // Définition de l'énumération
    
  }
});

// Step 2: Create a model
const User = mongoose.model('User', userSchema);

module.exports = User;