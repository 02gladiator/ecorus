import React, { useState } from 'react';
import styles from './index.module.scss';
import productImage from '../../assets/DSC06454.jpg';
import {ProductCard} from "../../components/ProductCard";

export const EcoMarketPage: React.FC = () => {
    const [sort, setSort] = useState<'popular' | 'price' | 'new'>('popular');

    const mockProducts = [
        {
            image: productImage,
            brand: 'Nike',
            title: 'Air Zoom Alpha',
            type: 'Мужская обувь',
            price: 1500,
        },
        {
            image: productImage,
            brand: 'Adidas',
            title: 'Ultraboost 22',
            type: 'Женская обувь',
            price: 1300,
        },
        {
            image: productImage,
            brand: 'Reebok',
            title: 'Classic Leather',
            type: 'Универсальная обувь',
            price: 1100,
        },
        {
            image: productImage,
            brand: 'Nike',
            title: 'Air Zoom Alpha',
            type: 'Мужская обувь',
            price: 1500,
        },
        {
            image: productImage,
            brand: 'Adidas',
            title: 'Ultraboost 22',
            type: 'Женская обувь',
            price: 1300,
        },
        {
            image: productImage,
            brand: 'Reebok',
            title: 'Classic Leather',
            type: 'Универсальная обувь',
            price: 1100,
        },
        {
            image: productImage,
            brand: 'Nike',
            title: 'Air Zoom Alpha',
            type: 'Мужская обувь',
            price: 1500,
        },
        {
            image: productImage,
            brand: 'Adidas',
            title: 'Ultraboost 22',
            type: 'Женская обувь',
            price: 1300,
        },
        {
            image: productImage,
            brand: 'Reebok',
            title: 'Classic Leather',
            type: 'Универсальная обувь',
            price: 1100,
        },
    ];

    return (
        <div className={styles.page}>
            <div className={styles.topBar}>
                <h1 className={styles.title}>ЭкоМаркет</h1>
                <div className={styles.sort}>
                    <button
                        className={sort === 'popular' ? styles.active : ''}
                        onClick={() => setSort('popular')}
                    >
                        По популярности
                    </button>
                    <button
                        className={sort === 'price' ? styles.active : ''}
                        onClick={() => setSort('price')}
                    >
                        По цене
                    </button>
                    <button
                        className={sort === 'new' ? styles.active : ''}
                        onClick={() => setSort('new')}
                    >
                        По новизне
                    </button>
                </div>
            </div>
            <div className={styles.content}>
                <aside className={styles.sidebar}>
                    <button className={styles.resetBtn}>Сбросить фильтры</button>
                </aside>

                <section className={styles.products}>
                    {mockProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </section>
            </div>
        </div>
    );
};
