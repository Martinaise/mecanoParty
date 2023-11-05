const express = require("express");
const router = express.Router();
const service = require("../controller/service");

/************ debut CRUND USER */
router.post("/", service.createService);
router.get("/:id", service.getService);
router.put("/:id", service.putService);
router.delete("/:id", service.deleteService);
router.get("/", service.getServices);
/************ FIN CRUND */

module.exports = router;
