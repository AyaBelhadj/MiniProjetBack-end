const mongoose = require('mongoose');

// Étape 1: Définir un schéma
const supportCoursSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    fichier: {
        type: String,
        required: true
    },
    dateCreation: {
        type: Date,
        default: Date.now
    },
    matiere: {
        type: mongoose.Types.ObjectId,
        ref: 'Matiere',
        required: true
    },
    id_enseignant: {
        type: mongoose.Types.ObjectId,
        ref: 'Enseignant',
        required: true
    }
});

// Étape 2: Créer un modèle
const SupportCours = mongoose.model('SupportCours', supportCoursSchema);
module.exports = SupportCours;
