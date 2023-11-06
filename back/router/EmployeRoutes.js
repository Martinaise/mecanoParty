const express = require("express");
const router = express.Router();
const vehicule = require("../controller/vehicule");

/************ debut CRUND USER */
router.post("/", vehicule.createVehicule);
router.put("/:id", vehicule.putVehicule);
router.delete("/:id", vehicule.deleteVehicule);
/************ FIN CRUND */

module.exports = router;

module.exports = router;
