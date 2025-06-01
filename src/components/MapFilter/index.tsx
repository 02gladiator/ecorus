import React from 'react';
import styles from './index.module.scss';
import {CustomDropdown} from "../Dropdown";

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
    return (
        <div className={styles.filters}>
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
    );
};

