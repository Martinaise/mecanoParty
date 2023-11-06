const express = require("express");
const router = express.Router();
const service = require("../controller/service");

// sécurisations de certaines routes de services  avec adminmiddleweare  si pas admin pas assez
/************ debut CRUND USER */
router.get("/:id", service.getService);
router.get("/", service.getServices);
/************ FIN CRUND */

module.exports = router;
