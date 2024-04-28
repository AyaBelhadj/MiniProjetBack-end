const mongoose = require('mongoose');

// Étape 1: Définir un schéma
const supportCoursSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        unique: true
    },
    
    fichier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pdf',
        default:null
      },
    dateCreation: {
        type: Date,
        default: Date.now
    },
    id_matiere: {
        type: mongoose.Types.ObjectId,
        ref: 'Matiere',
        required: true
    },
});

// Étape 2: Créer un modèle
const SupportCours = mongoose.model('SupportCours', supportCoursSchema);
module.exports = SupportCours;
