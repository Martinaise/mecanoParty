import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <ul>
        <li>
          <Link to={"/service"}>Services</Link>
        </li>
        <li>
          <Link to={"/vehicule"}>Véhicule d'occasion</Link>
        </li>
        <li>
          <Link to={"/avis"}>Avis</Link>
        </li>
        <li>
          <Link to={"/apropos"}>A propos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
