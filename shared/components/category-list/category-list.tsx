"use client";

import { CategoryListUI } from "../ui/category-list/category-list";
import { useAppSelector } from "../../services/store";
import {
  selectCategories,
  selectIsLoading,
} from "../../services/slices/nextPizzaSlice";

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);
  const isLoading = useAppSelector(selectIsLoading);

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
