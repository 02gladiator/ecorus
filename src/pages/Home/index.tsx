import React from 'react';
import {Slider} from "../../components/Slider";
import {HomePromoSection} from "../../components/PromoSection";


export const HomePage: React.FC = () => {
    return (
        <main>
            <Slider />
            <HomePromoSection />
        </main>
    );
};
