const mongoose = require('mongoose');

// Étape 1: Définir un schéma
const noteSchema = new mongoose.Schema({
    id_etudiant: {
        type: mongoose.Types.ObjectId,
        ref: 'Etudiant',
        required: true
    },
    id_matiere: {
        type: mongoose.Types.ObjectId,
        ref: 'Matiere',
        required: true
    },
    note: {
        type: Number,
        required: true
    },
    annee_universitaire: {
        type: String,
        required: true
    }
});

// Étape 2: Créer un modèle
const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
