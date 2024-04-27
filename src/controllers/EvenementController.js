const Evenement = require("../models/evenement");
module.exports = {
  createEvenement: async (req, res) => {
    console.log("seleyem", req.body);
    const { nom, id_demandeur, date_evenement, id_presentateur } = req.body;

    if (!nom || !id_demandeur || !date_evenement || !id_presentateur) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      //to ignore case
      const evenement = await Evenement.findOne({ nom, date_evenement });

      console.log(evenement);
      if (evenement) {
        {
          return res
            .status(409)
            .json({ message: " Evenement already exists!" });
        }
      }

      const newEvenement = new Evenement({
        nom,
        id_demandeur,
        date_evenement,
        id_presentateur,
      });
      console.log("seleyem", newEvenement);
      const savedEvenement = await newEvenement.save();
      if (!savedEvenement) {
        return res.status(401).json({ message: " SQL ERROR!" });
      }

      res.status(200).json({
        message: "evenement successfuly registred",
        data: savedEvenement,
      });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  accepterEvenement: async (req, res) => {
    console.log("seleyem", req.body);
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const evenement = await Evenement.findOneAndUpdate(
        { _id: id },
        { isAccepted: true },
        { new: true }
      ).then((evenement) => {
        console.log("seleeeeyem", evenement);
        if (!evenement) {
          res.status(500).json({
            message: "something went wrong: event not accepted ",
          });
        } else {
          res.status(200).json({
            message: "event accepted successfuly ",
          });
        }
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  updateEvenement: async (req, res) => {
    console.log("seleyem", req.body);
    const { id, nom, id_demandeur, date_evenement, id_presentateur } = req.body;

    if (!id || !nom || !id_demandeur || !date_evenement || !id_presentateur) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const evenement = await Evenement.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      ).then(async (evenement) => {
        console.log("seleeeeyem", evenement);
        if (!evenement) {
          res.status(500).json({
            message: "Evenement not updated ",
          });
        } else {
          res.status(200).json({
            message: "Evenement updated successfuly ",
            data: evenement,
          });
        }
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  archiverEvenement: async (req, res) => {
    console.log("seleyem", req.body);
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const evenement = await Evenement.findOneAndUpdate(
        { _id: id },
        { isActive: false },
        { new: true }
      ).then((evenement) => {
        console.log("seleeeeyem", evenement);
        if (!evenement) {
          res.status(500).json({
            message: "evenement not deleted ",
          });
        } else {
          res.status(200).json({
            message: "evenement deleted successfuly ",
          });
        }
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  activerEvenement: async (req, res) => {
    console.log("seleyem", req.body);
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const evenement = await Evenement.findOneAndUpdate(
        { _id: id },
        { isActive: true },
        { new: true }
      ).then((evenement) => {
        console.log("seleeeeyem", evenement);
        if (!evenement) {
          res.status(500).json({
            message: "evenement not recovered ",
          });
        } else {
          res.status(200).json({
            message: "evenement recovered successfuly ",
          });
        }
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  getEvenementByNameOrID: async (req, res) => {
    console.log("seleyem", req.query);
    const nom = req.query.nom;
    const id = req.query.id;

    if (!nom && !id) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      let evenement;
      if (nom) {
        evenement = await Evenement.findOne({ nom: nom });
      } else {
        evenement = await Evenement.findOne({ _id: id });
      }

      if (!evenement) {
        res.status(404).json({
          message: "evenement not found ",
        });
      } else {
        res.status(200).json({
          message: "evenement found successfuly ",
          data: evenement,
        });
      }
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  getAllEvenements: async (req, res) => {
    try {
      const evenement = await Evenement.find({ isActive: true })
        .populate("id_demandeur id_presentateur", "nom prenom -_id -__t")
        .then((evenement) => {
          console.log("seleeeeyem", evenement);
          if (!evenement) {
            res.status(404).json({
              message: "evenement not found ",
            });
          } else {
            res.status(200).json({
              message: "evenement found successfuly ",
              data: evenement,
            });
          }
        });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};
