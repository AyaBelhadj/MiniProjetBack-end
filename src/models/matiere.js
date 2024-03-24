const mongoose = require('mongoose');

// Étape 1: Définir un schéma
const MatiereSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        unique: true
    },
    id_enseignant: {
        type: mongoose.Types.ObjectId,
        ref: 'Enseignant',
        required: true
    },
      
    isActive: {
      type: Boolean,
      default:true
    }
});

// Étape 2: Créer un modèle
const Matiere = mongoose.model('Matiere', MatiereSchema);
module.exports = Matiere;
