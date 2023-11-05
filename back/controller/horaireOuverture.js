const db = require("../bd/connect_bdd");
// début enregistrement un horaire d'ouverture
module.exports.createHoraireOuverture = async (req, res) => {
  // on récupère la requette de l'horaire d'ouverturre
  const { jour, heure_ouverture, heure_fermeture, id_user } = req.body;
  // on verifie que les champps de la requettes ne sont pas vide
  if (!jour || !heure_ouverture || !heure_fermeture || !id_user) {
    return res.status(404).json({
      message: "remplissez tous les champs",
    });
  }

  // envois a la bdd l'horaire saissit
  const myquery =
    "INSERT INTO horaire_ouverture (jour,heure_ouverture,heure_fermeture,id_user) VALUES (?, ?, ?, ?)";
  const values = [jour, heure_ouverture, heure_fermeture, id_user];

  try {
    const heureouverture = await db.executeQuery(myquery, values);
    res.status(201).json({
      message: "horaire d'ouverture créé ",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: `Votre horaire d'ouverture n'est pas créé ${error}`,
    });
  }
};
//fin enregistrement l'horaire d'ouverture

//début de récupération de l'horaire d'ouverture
module.exports.geteHoraireOuverture = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const horaire = await db.executeQuery(
      "SELECT * FROM horaire_ouverture WHERE  id_horaire_ouverture = ?",
      [id]
    );
    res.status(201).json({
      horaire,
    });
  } catch (error) {
    res.status(404).json({
      message: `erreur ${error}`,
    });
  }
};
// fin de récupération de l'horaire d'ouverture

// début modifier  de l'horaire d'ouverture
module.exports.putHoraireOuverture = async (req, res) => {
  const { id } = req.params;
  const { jour, heure_ouverture, heure_fermeture, id_user } = req.body;
  console.log(id);

  const updateexecuteQuery =
    "UPDATE horaire_ouverture Set jour = ?, heure_ouverture = ?, heure_fermeture = ? ,id_user = ? WHERE id_horaire_ouverture = ? ";
  let values = [jour, heure_ouverture, heure_fermeture, id_user, id];
  try {
    const avis = await db.executeQuery(updateexecuteQuery, values);
    res.status(201).json({
      message: "l'horaire d'ouverture  a été modifié",
    });
  } catch (error) {
    res.status(404).json({
      message: `Votre horaire d'ouverture n'est pas modifié ${error}`,
    });
  }
};
//fin modifier  de l'horaire d'ouverture

//suprimer un horaire d'ouverture

module.exports.deleteHoraireOuverture = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const avis = await db.executeQuery(
      "DELETE FROM horaire_ouverture WHERE  id_horaire_ouverture = ?",
      [id]
    );
    res.status(201).json({
      message: "l'horaire d'ouverture  a été supprimé",
    });
  } catch (error) {
    res.status(201).json({
      message: `votre  horaire d'ouverture n'a pas été supprimé ${error}`,
    });
  }
};
// fin de supression d'un 'horaire d'ouverture

//début  de récupération de  tous  l'horaire d'ouverture

module.exports.getHoraires = async (req, res) => {
  try {
    const horaires = await db.executeQuery("SELECT * FROM horaire_ouverture");
    res.status(201).json({
      horaires,
    });
  } catch (error) {
    res.status(404).json({
      message: `erreur ${error}`,
    });
  }
};
//fin  de récupération de  tous  l'horaire d'ouverture
