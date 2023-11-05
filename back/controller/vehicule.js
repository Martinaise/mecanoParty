const db = require("../bd/connect_bdd");
// début enregistrement un horaire d'ouverture
module.exports.createVehicule = async (req, res) => {
  // on récupère la requette de l'horaire d'ouverturre
  const {
    reference,
    puissance,
    couleur_exterieur,
    nombre_de_siege,
    conso_mixte,
    type_consommation_vehicule,
    puissance_fiscal,
    interieur,
    poids,
    nombres_de_portes,
    capacite_du_coffre,
    lieu_de_recuperation_voiture,
    emission_carbonne,
    prix_par_mois,
    prix,
    kilometrage,
    marque_vehicule,
    type_transmission,
    annee_fabrication_vehicule,
    image,
    id_user,
  } = req.body;
  // on verifie que les champps de la requettes ne sont pas vide
  if (
    !reference ||
    !puissance ||
    !couleur_exterieur ||
    !nombre_de_siege ||
    !conso_mixte ||
    !type_consommation_vehicule ||
    !puissance_fiscal ||
    !interieur ||
    !poids ||
    !nombres_de_portes ||
    !capacite_du_coffre ||
    !lieu_de_recuperation_voiture ||
    !emission_carbonne ||
    !prix_par_mois ||
    !prix ||
    !kilometrage ||
    !marque_vehicule ||
    !type_transmission ||
    !annee_fabrication_vehicule ||
    !image ||
    !id_user
  ) {
    return res.status(404).json({
      message: "remplissez tous les champs",
    });
  }

  // envois a la bdd l'horaire saissit
  const myquery =
    "INSERT INTO vehicule (reference, puissance ,couleur_exterieur, nombre_de_siege , conso_mixte ,type_consommation_vehicule,puissance_fiscal ,interieur ,poids,nombres_de_portes, capacite_du_coffre, lieu_de_recuperation_voiture, emission_carbonne ,prix_par_mois,prix ,kilometrage,marque_vehicule, type_transmission ,annee_fabrication_vehicule,image,id_user ) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?)";
  const values = [
    reference,
    puissance,
    couleur_exterieur,
    nombre_de_siege,
    conso_mixte,
    type_consommation_vehicule,
    puissance_fiscal,
    interieur,
    poids,
    nombres_de_portes,
    capacite_du_coffre,
    lieu_de_recuperation_voiture,
    emission_carbonne,
    prix_par_mois,
    prix,
    kilometrage,
    marque_vehicule,
    type_transmission,
    annee_fabrication_vehicule,
    image,
    id_user,
  ];

  try {
    const heureouverture = await db.executeQuery(myquery, values);
    res.status(201).json({
      message: "véhicule créé ",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: `Votre véhicule n'est pas créé ${error}`,
    });
  }
};
//fin enregistrement l'horaire d'ouverture

//début de récupération de l'horaire d'ouverture
module.exports.getVehicule = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const vehicule = await db.executeQuery(
      "SELECT * FROM vehicule WHERE  id_vehicule = ?",
      [id]
    );
    res.status(200).json({
      vehicule,
    });
  } catch (error) {
    res.status(404).json({
      message: `erreur ${error}`,
    });
  }
};
// fin de récupération de l'horaire d'ouverture

// début modifier  de l'horaire d'ouverture
module.exports.putVehicule = async (req, res) => {
  const { id } = req.params;
  const {
    reference,
    puissance,
    couleur_exterieur,
    nombre_de_siege,
    conso_mixte,
    type_consommation_vehicule,
    puissance_fiscal,
    interieur,
    poids,
    nombres_de_portes,
    capacite_du_coffre,
    lieu_de_recuperation_voiture,
    emission_carbonne,
    prix_par_mois,
    prix,
    kilometrage,
    marque_vehicule,
    type_transmission,
    annee_fabrication_vehicule,
    image,
    id_user,
  } = req.body;

  // on verifie que les champps de la requettes ne sont pas vide
  if (
    !reference ||
    !puissance ||
    !couleur_exterieur ||
    !nombre_de_siege ||
    !conso_mixte ||
    !type_consommation_vehicule ||
    !puissance_fiscal ||
    !interieur ||
    !poids ||
    !nombres_de_portes ||
    !capacite_du_coffre ||
    !lieu_de_recuperation_voiture ||
    !emission_carbonne ||
    !prix_par_mois ||
    !prix ||
    !kilometrage ||
    !marque_vehicule ||
    !type_transmission ||
    !annee_fabrication_vehicule ||
    !image ||
    !id_user
  ) {
    return res.status(404).json({
      message: "remplissez tous les champs",
    });
  }

  const updateexecuteQuery = `UPDATE vehicule Set reference = ?,
    puissance = ?,
    couleur_exterieur = ?,
    nombre_de_siege = ?,
    conso_mixte = ?,
    type_consommation_vehicule = ?,
    puissance_fiscal = ?,
    interieur = ?,
    poids = ?,
    nombres_de_portes = ?,
    capacite_du_coffre = ?,
    lieu_de_recuperation_voiture = ?,
    emission_carbonne = ?,
    prix_par_mois = ?,
    prix = ?,
    kilometrage = ?,
    marque_vehicule = ?,
    type_transmission = ?,
    annee_fabrication_vehicule = ?,
    image = ?,
    id_user= ?
     WHERE id_vehicule = ? `;
  const values = [
    reference,
    puissance,
    couleur_exterieur,
    nombre_de_siege,
    conso_mixte,
    type_consommation_vehicule,
    puissance_fiscal,
    interieur,
    poids,
    nombres_de_portes,
    capacite_du_coffre,
    lieu_de_recuperation_voiture,
    emission_carbonne,
    prix_par_mois,
    prix,
    kilometrage,
    marque_vehicule,
    type_transmission,
    annee_fabrication_vehicule,
    image,
    id_user,
    id,
  ];
  try {
    const avis = await db.executeQuery(updateexecuteQuery, values);
    res.status(201).json({
      message: "le véhicule  a été modifié",
    });
  } catch (error) {
    res.status(404).json({
      message: `Votre horaire d'ouverture n'est pas modifié ${error}`,
    });
  }
};
//fin modifier  de l'horaire d'ouverture

//suprimer un horaire d'ouverture

module.exports.deleteVehicule = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const avis = await db.executeQuery(
      "DELETE FROM vehicule WHERE  id_vehicule = ?",
      [id]
    );
    res.status(201).json({
      message: "vehicule  a été supprimé",
    });
  } catch (error) {
    res.status(201).json({
      message: `votre véhicule n'a pas été supprimé ${error}`,
    });
  }
};
// fin de supression d'un 'horaire d'ouverture

//début  de récupération de  tous  l'horaire d'ouverture

module.exports.getVheicules = async (req, res) => {
  try {
    const vehicules = await db.executeQuery("SELECT * FROM vehicule");
    res.status(201).json({
      vehicules,
    });
  } catch (error) {
    res.status(404).json({
      message: `erreur ${error}`,
    });
  }
};
//fin  de récupération de  tous  l'horaire d'ouverture
