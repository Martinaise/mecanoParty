const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Définissez le chemin du dossier public
const publicDir = path.join("./public"); // Remplacez 'public' par le chemin souhaité

// Vérifiez si le dossier public existe, sinon créez-le
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const storage = multer.diskStorage({
  destination: "./public/images",
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage }).single("image");
module.exports = upload;
