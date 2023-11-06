const express = require("express");
const router = express.Router();
const authUser = require("../controller/authUser");
const user = require("../controller/user");
const service = require("../controller/service");
const adminmiddleweare = require("../middlewaves/middlewaresAdmin");
const horaireOuverture = require("../controller/horaireOuverture");

//user
router.post("/register", adminmiddleweare, authUser.register);
router.delete("/:id", adminmiddleweare, user.deleteUser);
router.get("/", adminmiddleweare, user.getUsers);
router.put("/:id", adminmiddleweare, user.putUser);
//service
router.post("/", adminmiddleweare, service.createService);
router.put("/:id", adminmiddleweare, service.putService);
router.delete("/:id", adminmiddleweare, service.deleteService);

//horaire d'ouverture

router.post("/", adminmiddleweare, horaireOuverture.createHoraireOuverture);
router.put("/:id", adminmiddleweare, horaireOuverture.putHoraireOuverture);
router.delete(
  "/:id",
  adminmiddleweare,
  horaireOuverture.deleteHoraireOuverture
);

module.exports = router;
