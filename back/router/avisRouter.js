const express = require("express");
const router = express.Router();
const avis = require("../controller/avis");

/************ debut CRUND USER */
router.post("/", avis.createAvis);
router.get("/:id", avis.getAvis);
router.put("/:id", avis.putAvis);
router.delete("/:id", avis.deleteAvis);
router.get("/", avis.getAvises);
/************ FIN CRUND */

module.exports = router;
