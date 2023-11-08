import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./pages/Service/Service";
import Navbar from "./compenents/Navbar/Navbar";
import Vehicule from "./pages/Vehicule/Vehicule";
import VehiculeDetail from "./pages/VehiculeDetail/VehiculeDetail";
import Connexion from "./pages/Connexion/Connexion";
import CreerCompteEmploye from "./pages/CreerCompteEmploye/CreerCompteEmploye";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/tous-les-vehicules" element={<Vehicule />} />
          <Route path="/detail-vehicule/:id" element={<VehiculeDetail />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route
            path="/creer-un-compte-employe"
            element={<CreerCompteEmploye />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
