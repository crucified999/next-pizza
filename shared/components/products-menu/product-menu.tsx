"use client";

import { useEffect, useState } from "react";
import { ProductsMenuUI } from "../ui/products-menu/products-menu";
import { useAppDispatch, useAppSelector } from "../../services/store";
import {
  fetchCategories,
  selectCategories,
  selectSortedBy,
} from "../../services/slices/nextPizzaSlice";

// const items = [
//   {
//     category: 'Все',
//   },
//   {
//     category: 'Мясные',
//   },
//   {
//     category: 'Острые',
//   },
//   {
//     category: 'Сладкие',
//   },
//   {
//     category: 'Вегетарианские',
//   },
//   {
//     category: 'С курицей',
//   }
// ];

const sortCategories = ["популярности", "цене", "рейтингу"];

export const ProductMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <ProductsMenuUI
      items={categories}
    />
  );
};
