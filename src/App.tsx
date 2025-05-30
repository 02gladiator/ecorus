import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ProfilePage } from './pages/Profile';
import { EcoMarketPage } from './pages/EcoMarket';
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();

    return (
        <>
            <Header token={'null'} />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/market" element={<EcoMarketPage />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    );
}

export default App;
