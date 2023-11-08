import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllHoraires } from "../../ServiceAappelApi";

const Footer = () => {
  const [horaires, setHoraires] = useState();

  const getHoraires = async () => {
    const response = await getAllHoraires();
    console.log("mes horaires", response?.data?.horaires);
    setHoraires(response?.data?.horaires);
  };
  useEffect(() => {
    getHoraires();
  }, []);
  return (
    <section>
      <div>
        <h1>Horaire d'ouverture</h1>
        <div>
          {horaires?.map((horaire) => (
            <p>
              {horaire?.jour} {horaire?.heure_ouverture}
            </p>
          ))}
        </div>
      </div>
      <div>
        <Link to={`/contact`}>prenez rendez-vous</Link>
      </div>
      <div>
        <p>Nous contacter</p>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
