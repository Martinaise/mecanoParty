import React from "react";
import Navbar from "../Navbar/Navbar";
import headerStyle from "./Heders.module.css";

const Headers = () => {
  return (
    <header className={`${headerStyle.header}`}>
      <Navbar />

      <div className={`${headerStyle.card_search}`}>
        <div className={`${headerStyle.card_search_content}`}>
          <input type="search" placeholder="Destination" />
          <input type="text" placeholder="Type de Destination" />
          <input type="month" />
        </div>
        <button>
          <span className="iconify" data-icon="ri:search-line" />
        </button>
      </div>

      {/*image waves (vagues) */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg> */}
    </header>
  );
};

export default Headers;
