const express = require("express");
const router = express.Router();
const vehicule = require("../controller/vehicule");

/************ debut CRUND USER */

router.get("/:id", vehicule.getVehicule);
router.get("/", vehicule.getVheicules);
/************ FIN CRUND */

module.exports = router;
