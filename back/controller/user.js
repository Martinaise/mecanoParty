const db = require("../bd/connect_bdd");
// recuoerer tous le utilisateurs executeQuery permet d'excécuté la requette
module.exports.getUsers = async (req, res) => {
  try {
    const users = await db.executeQuery("SELECT * FROM user");
    res.status(201).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
};
// fin de recuperer de tous le utilisateurs

// début recupéré un utilisateur
module.exports.getUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await db.executeQuery(
      "SELECT * FROM user WHERE  id_user = ?",
      [id]
    );
    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
// fin recupéré un utilisateur

// début modifier un utilisateur
module.exports.putUser = async (req, res) => {
  const { id } = req.params;
  const { nom, prenom, email, mot_de_passe, role_user } = req.body;
  console.log(id);

  const updateexecuteQuery =
    "UPDATE user Set nom = ?, prenom =?, email=?, mot_de_passe=?,role_user=? WHERE id_user =? ";
  let values = [nom, prenom, email, mot_de_passe, role_user, id];
  try {
    const user = await db.executeQuery(updateexecuteQuery, values);
    res.status(201).json({
      message: "l'utilisateur a été modifié",
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

//fin modifier un utilisateur

//suprimer un utulisateur

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await db.executeQuery("DELETE FROM user WHERE  id_user = ?", [
      id,
    ]);
    res.status(201).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
// fin de supression d'un utilisateur
