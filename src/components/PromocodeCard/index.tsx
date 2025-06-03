import React from 'react';
import styles from './index.module.scss';
import activeImage from '../../assets/Frame 2059 (2).jpg';
import inactiveImage from '../../assets/Frame 2059 (3).jpg';

interface PromoCardProps {
    amount: number;
    date: string;
    link: string;
    active: boolean;
}

export const PromocodeCard: React.FC<PromoCardProps> = ({ amount, date, link, active }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img
                    src={active ? activeImage : inactiveImage}
                    alt="Промокод"
                    className={styles.image}
                />
                <span className={styles.amount}>{amount} ₽</span>
            </div>
            <div className={styles.info}>
                <p className={styles.dateLabel}>Дата создания:</p>
                <p className={styles.date}>{date}</p>

                <p className={styles.linkLabel}>Ссылка на товар:</p>
                <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                </a>
            </div>
            {active && (
                <button className={styles.qrBtn}>Показать qr-код</button>
            )}
        </div>
    );
};
