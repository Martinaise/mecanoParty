import React from "react";

const CardVehicule = ({ vehicule }) => {
  return (
    <section>
      <div>
        <img
          src={vehicule?.image}
          alt={`representation de  ${vehicule?.image}`}
        />
      </div>
      <div>
        {vehicule?.marque_vehicule}
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default CardVehicule;
