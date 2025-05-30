import { useState } from 'react';

export type GenderFilter = 'male' | 'female';
export type TypeFilter = 'shoes' | 'clothes' | 'accessories';
export type BrandFilter = string;

export const useMarketFilters = () => {
    const [gender, setGender] = useState<GenderFilter[]>([]);
    const [types, setTypes] = useState<TypeFilter[]>([]);
    const [brands, setBrands] = useState<BrandFilter[]>([]);

    const resetFilters = () => {
        setGender([]);
        setTypes([]);
        setBrands([]);
    };

    return {
        gender, setGender,
        types, setTypes,
        brands, setBrands,
        resetFilters
    };
};
