import {useState, useEffect} from 'react';
import styles from './index.module.scss';
import {ProductCard} from "../../components/ProductCard";
import {FilterPanel} from "../../components/FilterPanel";
import {AnimatePresence, motion} from 'framer-motion';
import { useMarketFilters } from '../../hooks/useMarketFilters';
import type {ProductsEntity} from "../../types";
import {fetchProducts} from "../../api/products.ts";
import photo from "../../assets/DSC06454.jpg"

export const EcoMarketPage = () => {
    const [sort, setSort] = useState<'popular' | 'price' | 'new'>('popular');

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [products, setProducts] = useState<ProductsEntity[]>([]);

    const filterState = useMarketFilters();
    const { gender, types, brands } = filterState;

    const genderMap: Record<'male' | 'female', string> = {
        male: 'men',
        female: 'women',
    };

    const typeMap: Record<'shoes' | 'clothes' | 'accessories', string> = {
        shoes: 'shoes',
        clothes: 'wear',
        accessories: 'accessories',
    };

    const filteredProducts = products.filter((product) => {
        const brandMatch = !brands.length || brands.includes(product.brand);

        const genderMatch =
            !gender.length ||
            gender.map((g) => genderMap[g]).includes(product.gender);

        const typeMatch =
            !types.length ||
            types.map((t) => typeMap[t]).includes(product.type);

        return brandMatch && genderMatch && typeMatch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sort === 'price') return b.price - a.price;
        if (sort === 'new') return 0;
        return 0;
    });

    useEffect(() => {
        fetchProducts()
            .then(data => {
                setProducts(data);
            })
            .catch(err => console.error('Ошибка загрузки продуктов:', err))
    }, []);

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.2}}
        >
            <main className={styles.page}>
                <div className={styles.topBar}>
                    <h1 className={styles.title}>ЭкоМаркет</h1>
                    <div className={styles.actions}>
                        <button className={styles.filterBtn} onClick={() => setIsFilterOpen(true)}>Фильтры</button>
                        <div className={styles.sort + ' ' + styles.sortDesktop}>
                            <button className={sort === 'popular' ? styles.active : ''}
                                    onClick={() => setSort('popular')}>По популярности
                            </button>
                            <button className={sort === 'price' ? styles.active : ''}
                                    onClick={() => setSort('price')}>По цене
                            </button>
                            <button className={sort === 'new' ? styles.active : ''} onClick={() => setSort('new')}>По
                                новизне
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <aside className={styles.sidebar}>
                        <FilterPanel {...filterState} />
                    </aside>
                    <section className={styles.products}>
                        <ProductCard
                            image = {photo}
                            name = {"Лапшов Кирилл"}
                            type = {"Wear"}
                            price = {9999}
                            brand = {"Nike"}
                            />
                        {sortedProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </section>
                </div>
                <AnimatePresence>
                    {isFilterOpen && (
                        <motion.div
                            className={styles.filterModal}
                            initial={{y: '100%'}}
                            animate={{y: 0}}
                            exit={{y: '100%'}}
                            transition={{duration: 0.3}}
                        >
                            <div className={styles.filterContent}>
                                <button className={styles.closeBtn} onClick={() => setIsFilterOpen(false)}>Закрыть
                                </button>
                                <div className={styles.sort + ' ' + styles.sortMobile}>
                                    <button className={sort === 'popular' ? styles.active : ''}
                                            onClick={() => setSort('popular')}>
                                        По популярности
                                    </button>
                                    <button className={sort === 'price' ? styles.active : ''}
                                            onClick={() => setSort('price')}>
                                        По цене
                                    </button>
                                    <button className={sort === 'new' ? styles.active : ''}
                                            onClick={() => setSort('new')}>
                                        По новизне
                                    </button>
                                </div>
                                <FilterPanel {...filterState} />
                                <button className={styles.applyBtn} onClick={() => setIsFilterOpen(false)}>Применить фильтры
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </motion.div>
    );
};
