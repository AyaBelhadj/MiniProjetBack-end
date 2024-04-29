const express = require("express");
const enseignantController = require("../controllers/EnseignantController");
const userAuth = require("../middlewares/user-auth");
const adminAuth = require("../middlewares/admin-auth");
const ensAuth = require("../middlewares/enseignant-auth");
const adminAPI = "/admin";
const ensAPI = "/enseignant";

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

const route = express.Router();
// route.post("/createUser",userController.createuser)
// route.post("/login",userController.login)
// route.post("/changePwd",userAuth,userController.changePassword)
route.post(
  `${adminAPI}/createEnseignant`,
  adminAuth,
  enseignantController.createEnseignant
);
route.post(
  `${adminAPI}/updateEnseignant`,
  adminAuth,
  enseignantController.updateEnseignant
);
route.post(
  `${ensAPI}/updateEnseignant`,
  ensAuth,
  enseignantController.updateEnseignant
);
route.post(
  `${adminAPI}/archiverEnseignant`,
  adminAuth,
  enseignantController.archiverenseignant
);
route.post(
  `${adminAPI}/activerEnseignant`,
  adminAuth,
  enseignantController.activerenseignant
);
route.post(
  `${adminAPI}/enseignant/uploadFile`,
  upload.single("pdf"),
  adminAuth,
  enseignantController.uploadFile
);

route.get(
  `${adminAPI}/getEnseignant`,
  adminAuth,
  enseignantController.getenseignantByEmailOrMatricule
);
route.get(
  `${ensAPI}/getEnseignant`,
  ensAuth,
  enseignantController.getenseignantByEmailOrMatricule
);
route.get(
  `${ensAPI}/getEnseignantByDepID`,
  ensAuth,
  enseignantController.getenseignantByDepartementID
);

route.get(
  `${adminAPI}/getAllEnseignants`,
  adminAuth,
  enseignantController.getallenseignant
);

module.exports = route;
