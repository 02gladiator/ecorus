import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ProfilePage } from './pages/Profile';
import { EcoMarketPage } from './pages/EcoMarket';
import { AnimatePresence } from 'framer-motion';
import {CollectionPointsPage} from "./pages/CollectionPoints";
import {useSelector} from "react-redux";
import type {RootState} from "./store";

function App() {
    const location = useLocation();
    const hideFooterOnRoutes = ['/points'];
    const token = useSelector((state: RootState) => state.auth.accessToken);
    const balance = useSelector((state: RootState) => state.auth.user?.balance);

    return (
        <>
            <Header token={token} balance={balance}/>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/market" element={<EcoMarketPage />} />
                    <Route path="/points" element={<CollectionPointsPage />} />
                </Routes>
            </AnimatePresence>
            {!hideFooterOnRoutes.includes(location.pathname) && <Footer />}
        </>
    );
}

export default App;
