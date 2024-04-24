const User = require("../models/users");
const Departement = require("../models/departement");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const generatedPwd = require("../utils/generatePassword");
const Etudiant = require("../models/etudiant");
module.exports = {
  createEtudiant: async (req, res) => {
    console.log("seleyem", req.body);
    const {
      nom,
      prenom,
      adresse,
      dateNaiss,
      numTel,
      email,
      nomGroupe,
      numInscription,
    } = req.body;

    if (
      !nom ||
      !prenom ||
      !adresse ||
      !dateNaiss ||
      !numTel ||
      !nomGroupe ||
      !email ||
      !numInscription
    ) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const etudiant = await Etudiant.findOne({ email });
      console.log(etudiant);
      if (etudiant) {
        return res.status(409).json({ message: " etudiant already exists!" });
      }

      const salt = await bcrypt.genSalt(10);
      if (!salt) throw Error("Something went wrong with bcrypt");
      const password = generatedPwd();
      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error("Something went wrong hashing the password");
      const role = "etudiant";

      const newetudiant = new Etudiant({
        role: role,
        email: email,
        password: hash,
        nom: nom,
        prenom: prenom,
        adresse: adresse,
        dateNaiss: dateNaiss,
        numTel: numTel,
        nomGroupe: nomGroupe,
        numInscription: numInscription,
      });
      console.log("seleyem", newetudiant);
      const savedetudiant = await newetudiant.save();
      if (!savedetudiant)
        throw Error("Something went wrong saving the etudiant");

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "youtchyou@gmail.com",
          pass: "fbmb zrva nlxt bkhq",
        },
      });
      const mailOptions = {
        from: "youtchyou@gmail.com",
        to: email,
        subject: "ISSATSO++:Mot de Passe d'inscription ",
        text: `Bonjour,\n\nvoici votre mot de passe pour se connecter a ISSATSO++.
            Email: ${email}\n 
            Password:${password}`,
      };

      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          console.error(err);

          res.status(500).json({ message: "Error sending email" });
        } else {
          res.status(200).json({ message: "Email sent successfully" });
        }
      });

      res.status(200).json({
        message: "etudiant successfuly registred",
        etudiant: savedetudiant,
      });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  updateEtudiant: async (req, res) => {
    const {
      nom,
      prenom,
      adresse,
      dateNaiss,
      numTel,
      nomGroupe,
      numInscription,
    } = req.body;

    if (
      !nom ||
      !prenom ||
      !adresse ||
      !dateNaiss ||
      !numTel ||
      !numInscription /*!nomGroupe||*/
    ) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const etud = await Etudiant.findOneAndUpdate(
        { numInscription: numInscription },
        req.body,
        { new: true, projection: { password: 0 } }
      );
      console.log(etud);
      if (!etud) {
        res.status(404).json({
          message: "etudiant  not found ",
        });
      }

      res.status(200).json({
        message: "etudiant successfuly updated",
        data: etud,
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  archiverEtudiant: async (req, res) => {
    console.log("seleyem", req.body);
    const { numInscription } = req.body;

    if (!numInscription) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const etud = await Etudiant.findOneAndUpdate(
        { numInscription: numInscription },
        { isActive: false },
        { new: true }
      ).then((etudiant) => {
        console.log("seleeeeyem", etudiant);
        if (!etudiant) {
          res.status(500).json({
            message: "etudiant not deleted ",
          });
        } else {
          res.status(200).json({
            message: "etudiant deleted successfuly ",
          });
        }
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  activerEtudiant: async (req, res) => {
    console.log("seleyem", req.body);
    const { numInscription } = req.body;

    if (!numInscription) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const etud = await Etudiant.findOneAndUpdate(
        { numInscription: numInscription },
        { isActive: true },
        { new: true }
      ).then((etudiant) => {
        console.log("seleeeeyem", etudiant);
        if (!etudiant) {
          res.status(500).json({
            message: "etudiant not recovered ",
          });
        } else {
          res.status(200).json({
            message: "etudiant recovered successfuly ",
          });
        }
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  getetudiantByEmailOrNumInscription: async (req, res) => {
    console.log("seleyem", req.query);
    const email = req.query.email;
    const numInscription = req.query.numInscription;

    if (!email && !numInscription) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      let etud;
      if (email) {
        etud = await Etudiant.findOne({ email: email }, "-password");
      } else {
        etud = await Etudiant.findOne(
          { numInscription: numInscription },
          "-password"
        );
      }

      if (!etud) {
        res.status(404).json({
          message: "Etudiant not found ",
        });
      } else {
        res.status(200).json({
          message: "Etudiant found successfuly ",
          data: etud,
        });
      }
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  getallEtudiant: async (req, res) => {
    try {
      const etud = await Etudiant.find({ isActive: true }, "-password").then(
        (etudiant) => {
          console.log("seleeeeyem", etudiant);
          if (!etudiant) {
            res.status(404).json({
              message: "Etudiant not found ",
            });
          } else {
            res.status(200).json({
              message: "Etudiant found successfuly ",
              data: etudiant,
            });
          }
        }
      );
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};
