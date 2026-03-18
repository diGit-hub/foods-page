import { Route, Routes } from "react-router"
import Home from "./Home"
import InfoPage from "./InfoPage"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info-page" element={<InfoPage />} />
        </Routes>
    )
}

export default App
