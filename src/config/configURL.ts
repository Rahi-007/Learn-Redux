import { BASE_URL } from "./const";

export const API_URLS = {
  books: {
    getAll: `${BASE_URL}/books`,
    getById: (id: number) => `${BASE_URL}/books/${id}`,
    create: `${BASE_URL}/books`,
    update: (id: number) => `${BASE_URL}/books/${id}`,
    delete: (id: number) => `${BASE_URL}/books/${id}`,
  },
};
