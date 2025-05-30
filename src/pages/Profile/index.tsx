import React, {useState} from 'react';
import styles from './index.module.scss';
import {UserCard} from "../../components/UserCard";
import {PromoTab} from "../../components/ProfileTabs/PromoTab";
import {HistoryTab} from "../../components/ProfileTabs/HistoryTab";
import { motion } from 'framer-motion';

export const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'promo' | 'history'>('promo');

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.2}}
        >
            <main className={styles.page}>
                <h1 className={styles.title}>Личный кабинет</h1>
                <div className={styles.content}>
                    <UserCard/>
                    <div className={styles.right}>
                        <div className={styles.tabs}>
                            <button
                                className={`${activeTab === 'promo' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('promo')}
                            >
                                Промокоды
                            </button>
                            <button
                                className={`${activeTab === 'history' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('history')}
                            >
                                История
                            </button>
                        </div>

                        <div className={styles.tabContent}>
                            {activeTab === 'promo' && <PromoTab/>}
                            {activeTab === 'history' && <HistoryTab/>}
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};
