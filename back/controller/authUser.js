const db = require("../bd/connect_bdd");
const bcrypt = require("bcrypt");
// _____________TOKEN__________
const jwt = require("jsonwebtoken");
// Créer un token avec une durée de validité
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id_user) => {
  return jwt.sign(
    { id_user },
    // token definit dans.env
    process.env.TOKEN,
    {
      expiresIn: maxAge,
    }
  );
};
// ____________TOKEN__________

// enregistrer un utilisateur
module.exports.register = async (req, res) => {
  // on recupe la requette de l'utilisateur
  let { nom, prenom, email, mot_de_passe, role_user = "admin" } = req.body;
  // on verifie que les champps de la requettes ne sont pas vide
  if (!nom || !prenom || !email || !mot_de_passe || !role_user) {
    return res.status(404).json({
      message: "remplissez tous les champs",
    });
  }
  // début criptage de mode passe
  const salt = await bcrypt.genSalt();
  mot_de_passe = await bcrypt.hash(mot_de_passe, salt);
  //fin criptage de mode passe
  // envois a la bdd ce que la personne a saisit

  const myquery =
    "INSERT INTO user (nom, prenom, email, mot_de_passe, role_user) VALUES (?, ?, ?, ?, ?)";
  const values = [nom, prenom, email, mot_de_passe, role_user];

  try {
    const user = await db.executeQuery(myquery, values);
    res.status(201).json({
      message: "l'enregistrement s'est bien pasé ",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: `vous n'est pas enregitré ${error}`,
    });
  }
};
// fin enregistrer un utilisateur

// début AUTHENTIFICATION

module.exports.login = async (req, res) => {
  // on recupere la requette saisit par l'utilisateur
  const { email, mot_de_passe } = req.body;

  // on verifie que les champps de la requettes ne sont pas vide
  if (!email || !mot_de_passe) {
    return res.status(404).json({
      message: "remplissez tous les champs",
    });
  }

  // envois a la bdd ce que la personne a saisit
  try {
    const loginQuery = `SELECT * FROM user WHERE email = ? `;
    const values = [email];
    const [user] = await db.executeQuery(loginQuery, values);

    // on verrifie si mot de passe ou email valide
    //si pas user on s'arrette la
    if (!user.id_user) {
      return res.status(404).json({
        message: "l'email n'est invalide",
      });
    }
    // on compare le mot de passe de la bdd et celui entreer parle  user et on le decripte avec bcrypt
    const verrification_mot_de_passe = await bcrypt.compare(
      mot_de_passe,
      user?.mot_de_passe
    );
    if (!verrification_mot_de_passe) {
      return res.status(404).json({
        message: "Le mot de passe est invalide",
      });
    }

    // appeel fonction création du token
    const token = createToken(user.id_user);

    return res.status(201).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `une erreur s'est produite ${error}`,
    });
  }
};
//fin  AUTHENTIFICATION
