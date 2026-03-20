import { Route, Routes } from "react-router";
import Home from "./Home";
import InfoPage from "./InfoPage";
import ListCountry from "./components/ListCountry";


function App() {
  return (
    <>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info-page" element={<InfoPage />} />
        <Route path="/paises" element={<ListCountry />} />
      </Routes>
    </>
  );
}

export default App;
