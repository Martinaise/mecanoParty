const db = require("../bd/connect_bdd");

// enregistrer un utilisateur
module.exports.register = async (req, res) => {
  // on recupe la requette de l'utilisateur
  const { nom, prenom, email, mot_de_passe, role_user = "admin" } = req.body;
  // on verifie que les champps de la requettes ne sont pas vide
  if (!nom || !prenom || !email || !mot_de_passe || !role_user) {
    return res.status(404).json({
      message: "remplissez tous les champs",
    });
  }
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
