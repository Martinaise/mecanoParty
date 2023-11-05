const express = require("express");
const router = express.Router();
const authUser = require("../controller/authUser");
const user = require("../controller/user");

/************ debut CRUND USER */
router.post("/register", authUser.register);
router.get("/", user.getUsers);
router.get("/:id", user.getUser);
router.put("/:id", user.putUser);
router.delete("/:id",user.deleteUser);
/************ FIN CRUND */

module.exports = router;
