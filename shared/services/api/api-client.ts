import { Category, Product } from "@prisma/client";
import { ApiRoutes } from "./routes";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

type TServerResponse<T> = {
  success: boolean;
} & T;

type TProductsResponse = TServerResponse<{
   data: Product[];
}>;

type TCategoriesResponse = TServerResponse<{
  data: Category[];
}>;

export const getProducts = () => {
  return fetch(`${BASE_URL}${ApiRoutes.PRODUCTS}`)
    .then((res) => checkResponse<TProductsResponse>(res))
    .then((data) => {
      if (data.success) return data.data;

      return Promise.reject(data);
    });
}

export const getCategories = () => {
  return fetch(`${BASE_URL}${ApiRoutes.CATEGORIES}`)
    .then((res) => checkResponse<TCategoriesResponse>(res))
    .then((data) => {
      if (data.success) return data.data;

      return Promise.reject(data);
    });
}