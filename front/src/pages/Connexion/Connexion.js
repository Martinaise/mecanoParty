import React, { useCallback, useState } from "react";
import Headers from "../../compenents/Headers/Headers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logMe } from "../../redux/authSlice";

const Connexion = () => {
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    // on fait une copie de ce que l'utilisateur a saisit
    const newUserCopy = { ...newUser };
    // on met l'objet copier icic et on lui donne la valeur ddu champs
    newUserCopy[name] = value;
    setNewUser(newUserCopy);
  };
  console.log("newuser", newUser);
  const handleSubmitLongin = useCallback(
    (e) => {
      e.preventDefault();
      (async () => {
        await dispatch(logMe(newUser));
        navigate("/");
      })();
    },
    [dispatch, newUser.email, newUser.mot_de_passe]
  );

  return (
    <>
      <Headers />
      <div>
        <form onSubmit={handleSubmitLongin}>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              onChange={handleInput}
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password">mot de passe</label>
            <input
              type="password"
              id="password"
              onChange={handleInput}
              name="mot_de_passe"
            />
          </div>
          <button>Se connecter</button>
        </form>
      </div>
    </>
  );
};

export default Connexion;
