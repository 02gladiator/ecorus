import React from 'react';
import styles from './index.module.scss';

interface HistoryCardProps {
    address: string;
    materials: string;
    date: string;
    points: number;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({ address, materials, date, points }) => {
    return (
        <div className={styles.card}>
            <div className={styles.points}>
                <img src="/src/assets/score.svg" alt="Баллы"/>
                <span>{points}</span>
            </div>

            <div className={styles.info}>
                <div className={styles.block}>
                    <p className={styles.label}>Адрес</p>
                    <p className={styles.value}>{address}</p>
                </div>

                <div className={styles.block}>
                    <p className={styles.label}>Материал</p>
                    <p className={styles.value}>{materials}</p>
                </div>

                <div className={styles.block}>
                    <p className={styles.label}>Дата</p>
                    <p className={styles.value}>{date}</p>
                </div>
            </div>
        </div>
    );
};
