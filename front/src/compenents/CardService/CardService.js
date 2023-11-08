import React from "react";

const CardService = ({ service }) => {
  return (
    <figure>
      <p>{service?.nom_service}</p>
      <div>
        <img src={service?.image} alt={`representation de ${service?.image}`} />
      </div>
      <figcaption>
        <p>{service?.description}</p>
      </figcaption>
    </figure>
  );
};

export default CardService;
