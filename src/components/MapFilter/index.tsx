import React, { useState } from 'react';
import styles from './index.module.scss';
import { CustomDropdown } from '../Dropdown';
import { MobileFiltersModal } from '../MobileFiltersModal';
import filterIcon from '../../assets/filter.svg';

interface MapFiltersProps {
    selectedStores: string[];
    setSelectedStores: (v: string[]) => void;
    selectedMaterials: string[];
    setSelectedMaterials: (v: string[]) => void;
    searchQuery: string;
    setSearchQuery: (v: string) => void;
}

export const MapFilters: React.FC<MapFiltersProps> = ({
                                                          selectedStores,
                                                          setSelectedStores,
                                                          selectedMaterials,
                                                          setSelectedMaterials,
                                                          searchQuery,
                                                          setSearchQuery,
                                                      }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles.filters}>
                <div className={styles.desktopOnly}>
                    <input
                        type="text"
                        placeholder="Поиск по адресу"
                        className={styles.search}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <CustomDropdown
                        label="Магазины"
                        options={[
                            {label: 'Nike', value: 'nike'},
                            {label: 'Adidas', value: 'adidas'},
                            {label: 'H&M', value: 'hm'},
                        ]}
                        selected={selectedStores}
                        onChange={setSelectedStores}
                    />
                    <CustomDropdown
                        label="Материалы"
                        options={[
                            {label: 'Пластик', value: 'Пластик'},
                            {label: 'Стекло', value: 'Стекло'},
                            {label: 'Бумага', value: 'Бумага'},
                        ]}
                        selected={selectedMaterials}
                        onChange={setSelectedMaterials}
                    />
                </div>
                <div className={styles.mobileTop}>
                    <input
                        type="text"
                        placeholder="Поиск по адресу"
                        className={styles.search}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className={styles.mobileFiltersBtn} onClick={() => setIsModalOpen(true)}>
                        <img src={filterIcon} alt=""/>
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <MobileFiltersModal
                    selectedStores={selectedStores}
                    setSelectedStores={setSelectedStores}
                    selectedMaterials={selectedMaterials}
                    setSelectedMaterials={setSelectedMaterials}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
};
