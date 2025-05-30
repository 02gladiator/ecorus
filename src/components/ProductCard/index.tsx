import React from 'react';
import styles from './index.module.scss';

interface ProductCardProps {
    image: string;
    brand: string;
    title: string;
    type: string;
    price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, brand, title, type, price }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
                <span className={styles.brand}>{brand}</span>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.type}>{type}</p>
                <div className={styles.price}>
                    <img src="/src/assets/score.svg" alt="Баллы"/>
                    <span>{price}</span>
                </div>
            </div>
        </div>
    );
};
