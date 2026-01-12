import { fetchApi } from "../libs/api";
import { Category } from "../types";

export const getCategories = async (): Promise<Category[]> => {
    return await fetchApi<Category[]>('/categories');
}