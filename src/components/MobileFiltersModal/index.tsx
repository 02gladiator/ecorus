import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

interface Option {
    label: string;
    value: string;
}

interface MobileFiltersModalProps {
    selectedStores: string[];
    setSelectedStores: (v: string[]) => void;
    selectedMaterials: string[];
    setSelectedMaterials: (v: string[]) => void;
    onClose: () => void;
}

const storeOptions: Option[] = [
    { label: 'Nike', value: 'nike' },
    { label: 'Adidas', value: 'adidas' },
    { label: 'H&M', value: 'hm' },
];

const materialOptions: Option[] = [
    { label: 'Пластик', value: 'Пластик' },
    { label: 'Стекло', value: 'Стекло' },
    { label: 'Бумага', value: 'Бумага' },
];

export const MobileFiltersModal: React.FC<MobileFiltersModalProps> = ({
                                                                          selectedStores,
                                                                          setSelectedStores,
                                                                          selectedMaterials,
                                                                          setSelectedMaterials,
                                                                          onClose,
                                                                      }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true));
    }, []);

    const toggleValue = (value: string, list: string[], setList: (v: string[]) => void) => {
        if (list.includes(value)) {
            setList(list.filter((v) => v !== value));
        } else {
            setList([...list, value]);
        }
    };

    const handleSelectAll = (
        allOptions: Option[],
        selected: string[],
        setSelected: (v: string[]) => void
    ) => {
        if (selected.length === allOptions.length) {
            setSelected([]);
        } else {
            setSelected(allOptions.map((o) => o.value));
        }
    };

    const isAllSelected = (options: Option[], selected: string[]) =>
        selected.length === options.length;

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 300);
    };
    const handleReset = () => {
        setSelectedStores([]);
        setSelectedMaterials([]);
    };

    return (
        <div className={styles.backdrop} onClick={handleClose}>
            <div
                className={`${styles.modal} ${visible ? styles.visible : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <h3>Фильтры</h3>

                <div className={styles.section}>
                    <p>Магазины</p>
                    <label className={styles.selectAll}>
                        <input
                            type="checkbox"
                            checked={isAllSelected(storeOptions, selectedStores)}
                            onChange={() => handleSelectAll(storeOptions, selectedStores, setSelectedStores)}
                        />
                        Выбрать всё
                    </label>
                    {storeOptions.map((opt) => (
                        <label key={opt.value}>
                            <input
                                type="checkbox"
                                checked={selectedStores.includes(opt.value)}
                                onChange={() => toggleValue(opt.value, selectedStores, setSelectedStores)}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>

                <div className={styles.section}>
                    <p>Материалы</p>
                    <label className={styles.selectAll}>
                        <input
                            type="checkbox"
                            checked={isAllSelected(materialOptions, selectedMaterials)}
                            onChange={() => handleSelectAll(materialOptions, selectedMaterials, setSelectedMaterials)}
                        />
                        Выбрать всё
                    </label>
                    {materialOptions.map((opt) => (
                        <label key={opt.value}>
                            <input
                                type="checkbox"
                                checked={selectedMaterials.includes(opt.value)}
                                onChange={() => toggleValue(opt.value, selectedMaterials, setSelectedMaterials)}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
                <button className={styles.resetBtn} onClick={handleReset}>
                    Сбросить фильтры
                </button>

                <button className={styles.closeBtn} onClick={handleClose}>
                    Применить
                </button>
            </div>
        </div>
    );
};
