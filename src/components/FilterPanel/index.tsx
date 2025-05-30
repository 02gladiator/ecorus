import React from 'react';
import styles from './index.module.scss';
import {useMarketFilters} from "../../hooks/useMarketFilters.ts";

const allBrands = [
    'Nike', 'Adidas', 'Reebok', 'Puma', 'New Balance',
    'Asics', 'Converse', 'Vans', 'Fila', 'Under Armour',
];


export const FilterPanel: React.FC = () => {
    const {
        gender, setGender,
        types, setTypes,
        brands, setBrands,
        resetFilters
    } = useMarketFilters();

    const toggle = <T,>(value: T, list: T[], setList: (v: T[]) => void) => {
        setList(
            list.includes(value)
                ? list.filter((v) => v !== value)
                : [...list, value]
        );
    };

    return (
        <div className={styles.panel}>
            <div className={styles.section}>
                <p className={styles.sectionTitle}>Пол</p>
                <label>
                    <input
                        type="checkbox"
                        checked={gender.includes('male')}
                        onChange={() => toggle('male', gender, setGender)}
                    />
                    Мужской
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={gender.includes('female')}
                        onChange={() => toggle('female', gender, setGender)}
                    />
                    Женский
                </label>
            </div>

            <div className={styles.section}>
                <p className={styles.sectionTitle}>Тип товара</p>
                <label>
                    <input
                        type="checkbox"
                        checked={types.length === 3}
                        onChange={() =>
                            setTypes(types.length === 3 ? [] : ['shoes', 'clothes', 'accessories'])
                        }
                    />
                    Выбрать всё
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={types.includes('shoes')}
                        onChange={() => toggle('shoes', types, setTypes)}
                    />
                    Обувь
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={types.includes('clothes')}
                        onChange={() => toggle('clothes', types, setTypes)}
                    />
                    Одежда
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={types.includes('accessories')}
                        onChange={() => toggle('accessories', types, setTypes)}
                    />
                    Аксессуары
                </label>
            </div>

            <div className={styles.section}>
                <p className={styles.sectionTitle}>Брэнд</p>
                <label>
                    <input
                        type="checkbox"
                        checked={brands.length === allBrands.length}
                        onChange={() =>
                            setBrands(brands.length === allBrands.length ? [] : allBrands)
                        }
                    />
                    Выбрать всё
                </label>
                <div className={styles.scrollable}>
                    {allBrands.map((brand) => (
                        <label key={brand}>
                            <input
                                type="checkbox"
                                checked={brands.includes(brand)}
                                onChange={() => toggle(brand, brands, setBrands)}
                            />
                            {brand}
                        </label>
                    ))}
                </div>
            </div>

            <button className={styles.resetBtn} onClick={resetFilters}>
                Сбросить фильтры
            </button>
        </div>
    );
};
