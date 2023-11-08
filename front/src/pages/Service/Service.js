import React, { useEffect, useState } from "react";
import Headers from "../../compenents/Headers/Headers";
import serviceStyle from "./Service.module.css";
import CardService from "../../compenents/CardService/CardService";
import {
  getAllAvis,
  getAllServices,
  getAllVehicules,
} from "../../ServiceAappelApi";
import CardVehicule from "../../compenents/CardVehicule/CardVehicule";
import { Link } from "react-router-dom";
import Footer from "../../compenents/Footer/Footer";

const Service = () => {
  //states
  const [services, setServices] = useState([]);
  const [vehicules, setVehicules] = useState([]);
  const [avis, setAvis] = useState([]);
  //fonction asynchrone pour faire appel api

  //service
  const getServices = async () => {
    const response = await getAllServices();
    setServices(response?.data?.services);
  };
  //vehicule
  const getVehicules = async () => {
    const response = await getAllVehicules();
    setVehicules(
      response?.data?.vehicules.length > 4
        ? response?.data?.vehicules?.slice(0, 4)
        : response?.data?.vehicules
    );
  };
  //avis
  const getAvis = async () => {
    const response = await getAllAvis();
    console.log(response?.data?.avises);
    setAvis(response?.data?.avises);
  };
  //quand la page est montée ou mise à jour le code dans useEffect est éxécuté
  useEffect(() => {
    getServices();
    getVehicules();
    getAvis();
  }, []);

  return (
    <>
      <Headers />
      <main>
        <h1>Service Offerts</h1>
        <section>
          {services?.map((service) => (
            <CardService service={service} />
          ))}
        </section>
        <section>
          <h2>Vente Véhicule d'occasion</h2>
          <h3>Nos marques</h3>
          {vehicules.map((vehicule) => (
            <CardVehicule vehicule={vehicule} />
          ))}
          <Link to={`/tous-les-vehicules`}>Voir Plus</Link>
        </section>
        <section>
          <h3>AVIS CLIENTS</h3>
          {avis
            ?.filter((monavis) => monavis.approuvee !== 0)
            .map((avis) => (
              <div>
                <p>{avis.commentaire}</p>
                <p>{avis.note}</p>
              </div>
            ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Service;
