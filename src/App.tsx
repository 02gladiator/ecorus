import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Home";
import {ProfilePage} from "./pages/Profile";
import {EcoMarketPage} from "./pages/EcoMarket";


function App() {

    return (
        <>
            <Header token={"null"}></Header>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/market" element={<EcoMarketPage />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App
