import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneVehicule } from "../../ServiceAappelApi";

const VehiculeDetail = () => {
  const { id } = useParams();
  const [vehicule, setVehicule] = useState();
  console.log("params");
  const getVehicule = async (id) => {
    const response = await getOneVehicule(id);
    console.log(response?.data?.vehicule[0]);
    setVehicule(response?.data?.vehicule[0]);
  };
  useEffect(() => {
    getVehicule(id);
  }, [id]);
  return (
    <div>
      <h1>Détail véhicule</h1>
      <section>
        <div>
          <img
            src={vehicule?.image}
            alt={`vehicule d'occasion ${vehicule?.image}`}
          />
        </div>
      </section>
    </div>
  );
};

export default VehiculeDetail;
