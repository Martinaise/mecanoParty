import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.png";
import navbarStyle from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <>
      {/*navbar*/}
      <nav className={`${navbarStyle.navbar}`}>
        <div className={`${navbarStyle.logo}`}>
          <Link to={"/"}>
            <img src={logo} alt="logo_navbar" width="150px" />
          </Link>
          {/*   ORDI*/}
        </div>

        <div className={`${navbarStyle.onglets}`}>
          <Link to={"/"}>Services</Link>
          <Link to={"/tous-les-vehicules"}>Véhicules d'ocaasion</Link>
          <Link to={"/avis"}>Avis</Link>
          <Link to={"/apropos"}>A Propos de nous</Link>
          {user?.token && (
            <Link to={`/creer-un-compte-employe`}>Créer un compte </Link>
          )}
        </div>
        {!user?.token ? (
          <div className={`${navbarStyle.onglets_icon}`}>
            <div className={`${navbarStyle.icon_auth}`}>
              <Link to={"/connexion"}>
                <span
                  className="iconify"
                  data-icon="iconamoon:profile-circle-thin"
                />
              </Link>
            </div>
          </div>
        ) : (
          <p>Bonjour {user?.user?.nom}</p>
        )}
        {/* FIN menu destop */}

        <div className={`${navbarStyle.menu_mobile}`}>
          <span className={`${navbarStyle.burger}`} onClick={openNav}>
            ☰
          </span>
          <div id="myNav" className={`${navbarStyle.overlay}`}>
            <a
              href="javascript:void(0)"
              className={`${navbarStyle.closebtn}`}
              onClick={closeNav}
            >
              ×
            </a>
            <div className={`${navbarStyle.overlay_content}`}>
              <Link to={"/"}>
                <img src={logo} alt="logo_navbar" width="150px" />
              </Link>

              <Link to={"/services"}>Services</Link>
              <Link to={"/vehicule"}>Véhicules d'ocaasion</Link>
              <Link to={"/avis"}>Avis</Link>
              <Link to={"/apropos"}>A Propos de nous</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* fin navbar */}
    </>
  );
};

export default Navbar;
