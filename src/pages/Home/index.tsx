import React from 'react';
import {Slider} from "../../components/Slider";
import {HomePromoSection} from "../../components/PromoSection";
import styles from './index.module.scss'


export const HomePage: React.FC = () => {
    return (
        <main className={styles.wrapper}>
            <Slider />
            <HomePromoSection />
        </main>
    );
};
