import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { ProductListUI } from "../ui/products-list/products-list";
import { useEffect } from "react";
import {
  fetchIngredients,
  fetchCategories,
  selectCategories,
  selectIngredients,
  selectProducts,
} from "@/shared/services/slices/nextPizzaSlice";
import { fetchProducts } from "@/shared/services/slices/nextPizzaSlice";

// const products = [
//   {
//     id: "1",
//     title: "Пицца",
//     price: 100,
//     image: "/pizza.avif",
//     description: "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
//     category: "Пицца",
//     amount: 0
//   },
//   {
//     id: "2",
//     title: "Пицца 2",
//     price: 200,
//     image: "/pizza.avif",
//     description: "Описание",
//     category: "Пицца",
//     amount: 1
//   },
// ]

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return <ProductListUI categories={categories} />;
};
