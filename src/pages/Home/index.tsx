import React from 'react';
import {Slider} from "../../components/Slider";
import {HomePromoSection} from "../../components/PromoSection";
import { motion } from 'framer-motion';
import styles from './index.module.scss'


export const HomePage: React.FC = () => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.2}}
        >
            <main className={styles.wrapper}>
                <Slider/>
                <HomePromoSection/>
            </main>
        </motion.div>
    );
};
