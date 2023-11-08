const express = require("express");
const router = express.Router();
const authUser = require("../controller/authUser");
const user = require("../controller/user");
const service = require("../controller/service");
const adminmiddleweare = require("../middlewaves/middlewaresAdmin");
const horaireOuverture = require("../controller/horaireOuverture");
const upload = require("../middlewaves/middlewaresUploadImage");

//user
router.post("/register", adminmiddleweare, authUser.register);
router.delete("/user/:id", adminmiddleweare, user.deleteUser);
router.get("/user/", adminmiddleweare, user.getUsers);
router.put("/user/:id", adminmiddleweare, user.putUser);
//service
router.post("/service/", upload, service.createService);
router.put("/service/:id", adminmiddleweare, service.putService);
router.delete("/service/:id", adminmiddleweare, service.deleteService);

//horaire d'ouverture

router.post(
  "/horaire/",
  adminmiddleweare,
  horaireOuverture.createHoraireOuverture
);
router.put(
  "/horaire/:id",
  adminmiddleweare,
  horaireOuverture.putHoraireOuverture
);
router.delete(
  "/horaire/:id",
  adminmiddleweare,
  horaireOuverture.deleteHoraireOuverture
);

module.exports = router;
