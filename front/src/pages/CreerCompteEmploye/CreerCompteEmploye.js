import React, { useState } from "react";
import Headers from "../../compenents/Headers/Headers";
import { CreateEmploye } from "../../ServiceAappelApi";


const CreerCompteEmploye = () => {
  const [employe, setEmploye] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    // on fait une copie de ce que l'utilisateur a saisit
    const newUserCopy = { ...employe };
    // on met l'objet copier icic et on lui donne la valeur ddu champs
    newUserCopy[name] = value;
    setEmploye(newUserCopy);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await CreateEmploye(employe);
    console.log("response", response);
  };

  return (
    <>
      <Headers />

      <h1>Créer un compte employé</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nom">Nom :</label>
            <input type="text" name="nom" onChange={handleInput} />
          </div>
          <div>
            <label htmlFor="prenom">Prénom</label>
            <input type="text" name="prenom" onChange={handleInput} />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="email" name="email" onChange={handleInput} />
          </div>
          <div>
            <label htmlFor="mot_de_passe">Mot de passe</label>
            <input type="password" name="mot_de_passe" onChange={handleInput} />
          </div>
          <button>Enregistrer</button>
        </form>
      </div>
    </>
  );
};

export default CreerCompteEmploye;
