import { Route, Routes } from "react-router";
import Home from "./Home";
import InfoPage from "./InfoPage";
import ListCountry from "./components/ListCountry";
import MealCountry from "./pages/MealCountry";
import Recetario from "./pages/Recetario";



function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info-page" element={<InfoPage />} />
                <Route path="/recetario" element={<Recetario />} />
                <Route path="/paises" element={<ListCountry />} />
                <Route path="/mealCountry/:xpais" element={<MealCountry />} />
            </Routes>
        </>
    );
}

export default App;
