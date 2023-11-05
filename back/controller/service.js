const db = require("../bd/connect_bdd");
// enregistrer un service
module.exports.createService = async (req, res) => {
  // on recupe la requette du service
  const { nom_service, image, description, id_user } = req.body;
  // on verifie que les champps de la requettes ne sont pas vide
  if (!nom_service || !image || !description || !id_user) {
    return res.status(404).json({
      message: "remplissez tous les champs",
    });
  }

  // envois a la bdd ce qu'on a saissit du service
  const myquery =
    "INSERT INTO service (nom_service,image,description,id_user) VALUES (?, ?, ?, ?)";
  const values = [nom_service, image, description, id_user];

  try {
    const service = await db.executeQuery(myquery, values);
    res.status(201).json({
      message: "Service créé ",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: `Votre service n'est pas créé ${error}`,
    });
  }
};
// fin enregistrer un utilisateur

//début de récupération de service
module.exports.getService = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const service = await db.executeQuery(
      "SELECT * FROM service WHERE  id_service = ?",
      [id]
    );
    res.status(201).json({
      service,
    });
  } catch (error) {
    console.log(error);
  }
};
// fin de récupération de service

// début modifier un utilisateur
module.exports.putService = async (req, res) => {
  const { id } = req.params;
  const { nom_service, image, description, id_service } = req.body;
  console.log(id);

  const updateexecuteQuery =
    "UPDATE service Set nom_service= ?, image =?, description=? WHERE id_service =? ";
  let values = [nom_service, image, description, id];
  try {
    const service = await db.executeQuery(updateexecuteQuery, values);
    res.status(201).json({
      message: "le service  a été modifié",
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};
//fin modifier service

//suprimer un service

module.exports.deleteService = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const service = await db.executeQuery(
      "DELETE FROM service WHERE  id_service = ?",
      [id]
    );
    res.status(201).json({
      service,
    });
  } catch (error) {
    console.log(error);
  }
};
// fin de supression un service
//début  de récupération de  tous les services

module.exports.getServices = async (req, res) => {
  try {
    const services = await db.executeQuery("SELECT * FROM service");
    res.status(201).json({
      services,
    });
  } catch (error) {
    console.log(error);
  }
};
//fin de récupération de  tous les services
