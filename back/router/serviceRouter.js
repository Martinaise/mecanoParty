const adminmiddleweare = require("../middlewaves/middlewaresAdmin");
const express = require("express");
const router = express.Router();
const service = require("../controller/service");

// sécurisations de certaines routes de services  avec adminmiddleweare  si pas admin pas assez
/************ debut CRUND USER */
router.post("/", adminmiddleweare, service.createService);
router.get("/:id", service.getService);
router.put("/:id", adminmiddleweare, service.putService);
router.delete("/:id", adminmiddleweare, service.deleteService);
router.get("/", service.getServices);
/************ FIN CRUND */

module.exports = router;
