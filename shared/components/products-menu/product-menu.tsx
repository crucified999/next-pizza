"use client";

import { useState } from "react";
import { ProductsMenuUI } from "../ui/products-menu/product-menu";
import { useAppSelector } from "../../services/store";
import { selectSortedBy } from "../../slices/nextPizzaSlice";

const items = [
  {
    category: 'Все',
  },
  {
    category: 'Мясные',
  },
  {
    category: 'Острые',
  },
  {
    category: 'Сладкие',
  },
  {
    category: 'Вегетарианские',
  },
  {
    category: 'С курицей',
  }
];


const sortCategories = [ "популярности", "цене", "рейтингу" ];

export const ProductMenu: React.FC = () => {
  const [isSortingMenuShown, setIsSortingMenuShown] = useState(false);
  const sortedBy = useAppSelector(selectSortedBy);

  const sortedByCategory = sortCategories.filter((category) => category !== sortedBy);

  const onHover = () => {
    setIsSortingMenuShown(true);
  }

  const onLeave = () => {
    setIsSortingMenuShown(false);
  }

  return (
    <ProductsMenuUI currentSortingCategory={sortedBy} title="Все пиццы" items={items} sortCategories={sortedByCategory} isSortingMenuShown={isSortingMenuShown} onHover={onHover} onLeave={onLeave} />
  )
}