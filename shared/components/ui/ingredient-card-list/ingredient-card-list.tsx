import { IngredientCardListUIProps } from "./types";
import { IngredientCard } from "../../ingredient-card";
import React from "react";

export const IngredientCardListUI: React.FC<IngredientCardListUIProps> = ({
  ingredients,
}) => {
  return (
    <ul className="grid grid-cols-3 gap-2 mt-2 max-h-[300px] overflow-y-auto">
      {ingredients.map((ingredient) => (
        <IngredientCard {...ingredient} />
      ))}
    </ul>
  );
};
