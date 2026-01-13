
import { fetchApi } from "../libs/api";
import { Bank } from "../types";

export const getAllBanks = async (): Promise<Bank[]> => {
    return await fetchApi<Bank[]>("/banks");
};