const adminmiddleweare = require("../middlewaves/middlewaresAdmin");
const express = require("express");
const router = express.Router();
const horaireOuverture = require("../controller/horaireOuverture");

// sécurisations de certaines routes de horaire  avec adminmiddleweare  si pas admin pas assez
/************ debut CRUND USER */
router.get("/:id", horaireOuverture.geteHoraireOuverture);
router.get("/", horaireOuverture.getHoraires);
/************ FIN CRUND */

module.exports = router;
