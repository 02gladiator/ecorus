import api from './axios';
import type{ProductsEntity} from "../types";

export const fetchProducts = async (): Promise<ProductsEntity[]> => {
    const res = await api.get('api/products', {
        params: { limit: 0, offset: 0 }
    });
    return res.data.list;
};
