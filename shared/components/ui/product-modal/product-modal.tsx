'use client';

import { ProductModalUIProps } from "./types";
import { IngredientCardUI } from "../ingredient-card/ingredient-card";
import { IngredientCard } from "../../ingredient-card/ingredient-card";
import { InredientCardList } from "../../ingredient-card-list";
import { Title } from "../title/title";
import { ChooseFormUI } from "../choose-form";

export const ProductModalUI: React.FC<ProductModalUIProps> = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="flex items-center justify-center">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="p-3 bg-[#fafafa]">
        <Title as="h2" text={product.name} className="text-2xl" />
        <p className="text-sm text-black/60">
          {product.ingredients
            .map((ingredient, index) => {
              if (index > 0) return ingredient.name.toLowerCase();
              return ingredient.name;
            })
            .join(", ")}
        </p>
        <div className="flex flex-col gap2">
          <ChooseFormUI buttons={
            product.items.map((item) => `${item.size} см`)
          } />
          <ChooseFormUI buttons={
            product.items.map((item) => item.pizzaType === 1 ? 'Традиционное' : 'Тонкое')
          } />
        </div>
        <div className="p-3">
          <Title as="h3" text="Добавить по вкусу" />
          <InredientCardList />
        </div>
      </div>
    </div>
  );
};
