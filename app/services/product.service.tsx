import { fetchApi } from "../libs/api";
import { Product } from "../types";

export const getProducts = async (): Promise<Product[]> => {
    return await fetchApi<Product[]>('/products');
}

export const getProductDetail = async (id: string): Promise<Product> => {
    return await fetchApi<Product>(`/products/${id}`);
}