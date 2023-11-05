const db = require("../bd/connect_bdd");
// enregistrer un avis
module.exports.createAvis = async (req, res) => {
  // on récupère la requette de l'avis
  const {
    heure_ouverture,
    commentaire,
    note,
    date_publication,
    approuvee,
    id_user,
  } = req.body;
  // on verifie que les champps de la requettes ne sont pas vide
  if (
    !heure_ouverture ||
    !commentaire ||
    !note ||
    !date_publication ||
    !id_user
  ) {
    return res.status(404).json({
      message: "remplissez tous les champs",
    });
  }

  // envois a la bdd l'avis saissit
  const myquery =
    "INSERT INTO avis (heure_ouverture,commentaire,note,date_publication,approuvee,id_user) VALUES (?, ?, ?, ?,?,?)";
  const values = [
    heure_ouverture,
    commentaire,
    note,
    date_publication,
    approuvee,
    id_user,
  ];

  try {
    const avis = await db.executeQuery(myquery, values);
    res.status(201).json({
      message: "avis créé ",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: `Votre avis n'est pas créé ${error}`,
    });
  }
};
//fin enregistrement avis

//début de récupération d'un avis
module.exports.getAvis = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const avis = await db.executeQuery(
      "SELECT * FROM avis WHERE  id_avis = ?",
      [id]
    );
    res.status(201).json({
      avis,
    });
  } catch (error) {
    console.log(error);
  }
};
// fin de récupération d'avis

// début modifier l'avis
module.exports.putAvis = async (req, res) => {
  const { id } = req.params;
  const { heure_ouverture, commentaire, note, date_publication, approuvee } =
    req.body;
  console.log(id);

  const updateexecuteQuery =
    "UPDATE avis Set heure_ouverture = ?, commentaire = ?, note = ? ,date_publication = ?,approuvee = ? WHERE id_avis = ? ";
  let values = [
    heure_ouverture,
    commentaire,
    note,
    date_publication,
    approuvee,
    id,
  ];
  try {
    const avis = await db.executeQuery(updateexecuteQuery, values);
    res.status(201).json({
      message: "l'avis  a été modifié",
    });
  } catch (error) {
    res.status(404).json({
        message: `Votre avis n'est pas modifié ${error}`
      
    });
  }
};
//fin modifier l'avis

 //suprimer un avis

module.exports.deleteAvis = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const avis = await db.executeQuery(
      "DELETE FROM avis WHERE  id_avis = ?",
      [id]
    );
    res.status(201).json({
        message: "l'avis  a été supprimé",
    });
  } catch (error) {
    res.status(201).json({
        message: `votre  avis n'a pas été supprimé ${error}`,
    });}};
// fin de supression d'un avis

//début  de récupération de  tous les avis

module.exports.getAvises = async (req, res) => {
  try {
    const avises = await db.executeQuery("SELECT * FROM avis");
    res.status(201).json({
      avises,
    });
  } catch (error) {
    console.log(error);
  }
};
//fin de récupération de  tous les avis
