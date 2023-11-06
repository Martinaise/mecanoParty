const express = require("express");
const router = express.Router();
const authUser = require("../controller/authUser");
const user = require("../controller/user");

/************ debut CRUND USER */

router.post("/login", authUser.login);
router.get("/:id", user.getUser);

/************ FIN CRUND */

module.exports = router;
