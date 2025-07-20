'use client';

import { useAppSelector } from "@/shared/services/store";
import { IngredientCardListUI } from "../ui/ingredient-card-list";
import { selectIngredients } from "@/shared/services/slices/nextPizzaSlice";

export const InredientCardList = () => {
  const ingredients = useAppSelector(selectIngredients);

  return <IngredientCardListUI ingredients={ingredients} />;
};
