import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Home";
import {ProfilePage} from "./pages/Profile";


function App() {

    return (
        <>
            <Header token={"null"}></Header>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App
