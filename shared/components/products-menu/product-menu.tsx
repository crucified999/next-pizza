"use client";

import { useEffect, useState } from "react";
import { ProductsMenuUI } from "../ui/products-menu/product-menu";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { fetchCategories, selectCategories, selectSortedBy } from "../../slices/nextPizzaSlice";

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


const sortCategories = [ "популярности", "цене", "рейтингу" ];

export const ProductMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  const [isSortingMenuShown, setIsSortingMenuShown] = useState(false);
  const sortedBy = useAppSelector(selectSortedBy);

  const sortedByCategory = sortCategories.filter((category) => category !== sortedBy);

  const onHover = () => {
    setIsSortingMenuShown(true);
  }

  const onLeave = () => {
    setIsSortingMenuShown(false);
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <ProductsMenuUI currentSortingCategory={sortedBy} title="Все пиццы" items={categories} sortCategories={sortedByCategory} isSortingMenuShown={isSortingMenuShown} onHover={onHover} onLeave={onLeave} />
  )
}