const express = require("express");
const router = express.Router();
const vehicule = require("../controller/vehicule");

/************ debut CRUND USER */
router.post("/", vehicule.createVehicule);
router.get("/:id", vehicule.getVehicule);
router.put("/:id", vehicule.putVehicule);
router.delete("/:id", vehicule.deleteVehicule);
router.get("/", vehicule.getVheicules);
/************ FIN CRUND */

module.exports = router;
