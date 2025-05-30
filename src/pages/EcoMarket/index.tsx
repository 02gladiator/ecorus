import React, { useState } from 'react';
import styles from './index.module.scss';

export const EcoMarketPage: React.FC = () => {
    const [sort, setSort] = useState<'popular' | 'price' | 'new'>('popular');

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
                </section>
            </div>
        </div>
    );
};
