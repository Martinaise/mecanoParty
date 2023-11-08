const express = require("express");
const router = express.Router();
const vehicule = require("../controller/vehicule");
const middlewareEmploye = require("../middlewaves/middlewaresEmployee");
const upload = require("../middlewaves/middlewaresUploadImage");
const avis = require("../controller/avis");
/************ debut CRUND USER */
router.post("/vehicule/", upload, vehicule.createVehicule);
router.put("/:id", middlewareEmploye, vehicule.putVehicule);
router.delete("/:id", middlewareEmploye, vehicule.deleteVehicule);
router.put("/:id", avis.putAvis);
router.delete("/:id", avis.deleteAvis);
/************ FIN CRUND */

module.exports = router;
