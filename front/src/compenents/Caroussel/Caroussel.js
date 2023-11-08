import React, { useEffect, useState } from "react";
import carousselStyle from "./Caroussel.module.css"

const Caroussel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Changez ici la durée en millisecondes entre chaque diapositive

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`${carousselStyle.carousel}`}>
      <button onClick={prevSlide}>Précédent</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      <button onClick={nextSlide}>Suivant</button>
    </div>
  );
};

export default Caroussel;
