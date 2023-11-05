const express = require("express");
const router = express.Router();
const horaireOuverture = require("../controller/horaireOuverture");

/************ debut CRUND USER */
router.post("/", horaireOuverture.createHoraireOuverture);
router.get("/:id", horaireOuverture.geteHoraireOuverture);
router.put("/:id", horaireOuverture.putHoraireOuverture);
router.delete("/:id", horaireOuverture.deleteHoraireOuverture);
router.get("/", horaireOuverture.getHoraires);
/************ FIN CRUND */

module.exports = router;
