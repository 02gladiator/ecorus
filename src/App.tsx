import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Home";


function App() {

    return (
        <>
            <Header token={null}></Header>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
