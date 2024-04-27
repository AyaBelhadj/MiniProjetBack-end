const mongoose = require("mongoose");

// Step 1: Define a schema
const evenementSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  id_demandeur: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isAccepted: {
    type: Boolean,
    default: false,
  },
  date_evenement: {
    type: Date,
    required: true,
  },
  id_presentateur: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Step 2: Create a model
const evenement = mongoose.model("Evenement", evenementSchema);
//module.exports = User.discriminator("Departement", departementSchema);
module.exports = evenement;
