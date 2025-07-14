import { TCategory, TProduct, TIngredient } from "./types";
import { ApiRoutes } from "./routes";
import { TCategoryWithRelations, TProductWithRelations } from "@/types/prisma";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

type TServerResponse<T> = {
  success: boolean;
} & T;

type TCategoriesResponse = TServerResponse<{
  data: TCategoryWithRelations[];
}>;

type TProductsResponse = TServerResponse<{
   data: TProductWithRelations[];
}>;

type TIngredientsResponse = TServerResponse<{
  data: TIngredient[];
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

export const getCategoryById = (id: number) => {
  return fetch(`${BASE_URL}${ApiRoutes.CATEGORY}/${id}`)
    .then((res) => checkResponse<TCategoriesResponse>(res))
    .then((data) => {
      if (data.success) return data.data;

      return Promise.reject(data);
    });
}

export const getIngredients = () => {
  return fetch(`${BASE_URL}${ApiRoutes.INGREDIENTS}`)
    .then((res) => checkResponse<TIngredientsResponse>(res))
    .then((data) => {
      if (data.success) return data.data;

      return Promise.reject(data);
    });
}