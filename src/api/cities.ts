import api from './axios';
import type {CitiesEntity, StoreEntity} from "../types";


export const fetchCities = async (): Promise<CitiesEntity[]> => {
    const response = await api.get<CitiesEntity[]>('api/cities');
    return response.data;
};

export const fetchStorePoints = async (cityId: number): Promise<StoreEntity[]> => {
    const res = await api.get(`api/cities/${cityId}/stores`);
    return res.data;
};
