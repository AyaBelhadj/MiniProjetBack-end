const Pdf = require("../models/Pdf");
const Enseignant = require("../models/enseignant");
const User = require("../models/users");
const Departement = require("../models/departement");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const generatedPwd = require("../utils/generatePassword");

module.exports = {
  createEnseignant: async (req, res) => {
    console.log("seleyem", req.body);
    const {
      nom,
      prenom,
      adresse,
      dateNaiss,
      numTel,
      matricule,
      grade,
      email,
      departementEns,
    } = req.body;

    if (
      !nom ||
      !prenom ||
      !adresse ||
      !matricule ||
      !dateNaiss ||
      !numTel ||
      !grade ||
      !email ||
      !departementEns
    ) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    try {
      const departement = await Departement.findOne({ nom: departementEns });
      if (!departement) {
        return res.status(404).json({
          message: "Cannot create new Enseignant. Department not found!",
        });
      }
      const user = await User.findOne({ email });
      console.log(user);
      if (user) {
        return res
          .status(404)
          .json({ message: "Account with the same email already exists!" });
      }

      const enseignant = await Enseignant.findOne({ matricule });
      if (enseignant) {
        return res
          .status(404)
          .json({
            message: "Enseignant with the same matricule already exists!",
          });
      }

      const chefDep = departement.Chef_Departement;
      const salt = await bcrypt.genSalt(10);
      if (!salt) throw Error("Something went wrong with bcrypt");
      const password = generatedPwd();
      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error("Something went wrong hashing the password");
      const role = "enseignant";

      const newEnseignant = new Enseignant({
        role: role,
        email: email,
        password: hash,
        nom: nom,
        prenom: prenom,
        adresse: adresse,
        dateNaiss: dateNaiss,
        numTel: numTel,
        matricule: matricule,
        grade: grade,
        chef_departement: chefDep,
        id_departement: departement._id,
      });
      console.log("seleyem", newEnseignant);

      const savedEnseignant = await newEnseignant.save();
      if (!savedEnseignant)
        throw Error("Something went wrong saving the enseignant");

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
        message: "enseignant successfuly registred",
        enseignant: savedEnseignant,
      });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  uploadFile: async (req, res) => {
    console.log("req.file is", req.file.fieldname);
    if (!req.file) {
      return res.status(400).json({ message: "Please enter the pdf file" });
    }
    try {
      const { originalname, buffer } = req.file;
      const idEnseignant = req.query.id;
      const pdf = new Pdf({
        name: originalname,
        description: "emploi_enseignant",

        data: buffer,
      });
      await pdf.save();
      const enseignant = await Enseignant.findByIdAndUpdate(
        { _id: idEnseignant },
        { fichier_emploi: pdf._id },
        { new: true }
      );
      if (!enseignant) {
        return res.status(500).json({
          message: "enseignant file not uploaded ",
        });
      }
      res.status(200).json({
        message: "enseignant file uploaded successfully ",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: `server Error : ${err.message}`,
      });
    }
  },

  updateEnseignant: async (req, res) => {
    console.log("seleyem", req.body);
    const {
      nom,
      prenom,
      adresse,
      dateNaiss,
      numTel,
      matricule,
      grade,
      departementEns,
    } = req.body;

    if (
      !nom ||
      !prenom ||
      !adresse ||
      !matricule ||
      !dateNaiss ||
      !numTel ||
      !grade ||
      !departementEns
    ) {
      return res.status(400).json({
        message: "Could not update Enseignant, Please enter all fields",
      });
    }

    try {
      const EnseigToUpdate = await Enseignant.findOne(
        { matricule: matricule },
        req.body,
        {
          new: true,
          projection: { password: 0 },
        }
      );
      console.log(EnseigToUpdate);
      if (!EnseigToUpdate) {
        return res.status(404).json({
          message: "Could not update Enseignant, Enseignant not found ",
        });
      }
      const departementEnseigExist = await Departement.findOne({
        nom: departementEns,
      });
      if (!departementEnseigExist) {
        return res.status(404).json({
          message: "Could not update Enseignant, Departement not found",
        });
      }
      const updatedEnseig = await Enseignant.findOneAndUpdate(
        { matricule: matricule },
        {
          $set: {
            nom: nom,
            prenom: prenom,
            adresse: adresse,
            dateNaiss: dateNaiss,
            numTel: numTel,
            matricule: matricule,
            grade: grade,
            id_departement: departementEnseigExist._id,
            chef_departement: departementEnseigExist.Chef_Departement,
          },
        },
        { new: true, projection: { password: 0 } }
      );
      return res.status(200).json({
        message: "Enseignant Updated Successfuly ",
        data: updatedEnseig,
      });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  },

  archiverenseignant: async (req, res) => {
    console.log("seleyem", req.body);
    const { matricule } = req.body;
    if (!matricule) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const ens = await Enseignant.findOneAndUpdate(
        { matricule: matricule },
        { isActive: false },
        { new: true }
      ).then((enseignant) => {
        console.log("seleeeeyem", enseignant);
        if (!enseignant) {
          return res.status(500).json({
            message: "enseignant not deleted ",
          });
        } else {
          return res.status(200).json({
            message: "enseignant deleted successfuly ",
          });
        }
      });
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  activerenseignant: async (req, res) => {
    console.log("seleyem", req.body);
    const { matricule } = req.body;

    if (!matricule) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const ens = await Enseignant.findOneAndUpdate(
        { matricule: matricule },
        { isActive: true },
        { new: true }
      ).then((enseignant) => {
        console.log("seleeeeyem", enseignant);
        if (!enseignant) {
          res.status(500).json({
            message: "enseignant not recovered ",
          });
        } else {
          res.status(200).json({
            message: "enseignant recovered successfuly ",
          });
        }
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  getenseignantByEmailOrMatricule: async (req, res) => {
    console.log("seleyem", req.query);
    const email = req.query.email;
    const matricule = req.query.matricule;

    if (!email && !matricule) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      let ens;
      if (email) {
        ens = await Enseignant.findOne({ email: email }, "-password");
      } else {
        ens = await Enseignant.findOne({ matricule: matricule }, "-password");
      }

      if (!ens) {
        res.status(404).json({
          message: "enseignant not found ",
        });
      } else {
        res.status(200).json({
          message: "enseignant found successfuly ",
          data: ens,
        });
      }
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  getallenseignant: async (req, res) => {
    try {
      const ens = await Enseignant.find({ isActive: true }, "-password")
      .populate("id_departement")
      .then(
        (enseignant) => {
          console.log("seleeeeyem", enseignant);
          if (!enseignant) {
            res.status(404).json({
              message: "enseignant not found ",
              data: null,
            });
          } else {
            res.status(200).json({
              message: "enseignant found successfuly ",
              data: enseignant,
            });
          }
        }
      );
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};
