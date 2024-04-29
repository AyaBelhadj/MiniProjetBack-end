const express = require("express");
const coursController = require("../controllers/SupportDeCoursController");
const userAuth = require("../middlewares/user-auth");
const etudAuth = require("../middlewares/etudiant-auth");
const adminAuth = require("../middlewares/admin-auth");
const ensAuth = require("../middlewares/enseignant-auth");
const ensAPI = "/enseignant";
const etudAPI = "/etudiant";
const userAPI = "/user";
const adminAPI = "/admin";
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

const route = express.Router();
route.post(
  `${ensAPI}/cours/uploadFile`,
  upload.single("pdf"),
  ensAuth,
  coursController.uploadFile
);
route.get(`${ensAPI}/cours/downloadFile`, ensAuth, coursController.getFile);

route.post(`${ensAPI}/createCours`, ensAuth, coursController.createCours);
route.post(`${ensAPI}/updateCours`, ensAuth, coursController.updateCours);
route.post(`${ensAPI}/deleteCours`, ensAuth, coursController.deleteCours);
route.get(
  `${userAPI}/getCoursByNameOrID`,
  userAuth,
  coursController.getCoursByNameOrID
);
route.get(`${userAPI}/getAllCours`, userAuth, coursController.getAllCours);

//route.get(`${ensAPI}/getAllCoursByEtudiant`, ensAuth, coursController.getAllCoursByEtudiant);
// route.get(`${ensAPI}/getCoursByNomMatiere`, ensAuth, coursController.getCoursByNomMatiere);
route.get(
  `${etudAPI}/getCoursByNomMatiere`,
  etudAuth,
  coursController.getCoursByNomMatiere
);

//route.get(`${adminAPI}/getAllCoursByEtudiant`, adminAuth, coursController.getAllCoursByEtudiant);

module.exports = route;
