import React, { useEffect, useState } from "react";
import { getAllVehicules } from "../../ServiceAappelApi";
import Headers from "../../compenents/Headers/Headers";
import { Link } from "react-router-dom";

const Vehicule = () => {
  const [vehicules, setVehicules] = useState([]);
  const getAllOfVehicules = async () => {
    const vehicules = await getAllVehicules();
    setVehicules(vehicules?.data?.vehicules);
  };
  useEffect(() => {
    getAllOfVehicules();
  }, []);
  return (
    <>
      <Headers />
      <h1>tous les véhicules d'occasion</h1>
      {vehicules?.map((vehicule) => (
        <Link to={`/detail-vehicule/${vehicule.id_vehicule}`}>
          <div>
            <img src={vehicule?.image} alt={`voiture ${vehicule?.image}`} />
          </div>
        </Link>
      ))}
    </>
  );
};

export default Vehicule;
