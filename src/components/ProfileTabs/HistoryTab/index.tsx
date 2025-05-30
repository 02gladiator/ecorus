import React from 'react';
import styles from './index.module.scss';
import {HistoryCard} from "../../HistoryCard";

const historyData = [
    {
        address: 'г. Москва, ул. Складская, 11',
        materials: 'Пластик: 1 кг • Стекло: 0.5 кг • Бумага: 2 кг',
        date: '15.05.2024',
        points: 120,
    },
    {
        address: 'г. Санкт-Петербург, Невский пр., 42',
        materials: 'Одежда: 3 кг • Алюминий: 1.2 кг',
        date: '10.05.2024',
        points: 95,
    },
    {
        address: 'г. Казань, ул. Баумана, 7',
        materials: 'Батарейки: 20 шт. • Электроника: 1 шт.',
        date: '02.05.2024',
        points: 150,
    },
];

export const HistoryTab: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            {historyData.map((entry, index) => (
                <HistoryCard key={index} {...entry} />
            ))}
        </div>
    );
};
