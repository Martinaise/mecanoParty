import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./pages/Service/Service";
import Navbar from "./compenents/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
