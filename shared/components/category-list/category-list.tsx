"use client";

import { useEffect, useState } from "react";
import { CategoryListUI } from "../ui/category-list/category-list";
import { useAppDispatch, useAppSelector } from "../../services/store";
import {
  fetchCategories,
  selectCategories,
  selectIsLoading,
  selectSortedBy,
} from "../../services/slices/nextPizzaSlice";
import { TCategoryWithRelations } from "@/types/prisma";
import { CategoryListItemUIProps } from "../ui/category-list-item/types";

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

export const CategoryList = () => {
  // const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const isLoading = useAppSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  return (
    <CategoryListUI
      items={categories.map((category) => ({
        id: category.id,
        name: category.name,
        isActive: false,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt,
      }))}
      loading={isLoading}
    />
  );
};
