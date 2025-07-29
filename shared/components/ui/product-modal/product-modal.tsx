"use client";

import { ProductModalUIProps } from "./types";
import { IngredientCardUI } from "../ingredient-card/ingredient-card";
import { IngredientCard } from "../../ingredient-card/ingredient-card";
import { ChooseForm } from "../../choose-form/choose-form";
import { InredientCardList } from "../../ingredient-card-list";
import { Title } from "../title/title";
import { ChooseFormUI } from "../choose-form";
import { usePizzaOptions } from "@/hooks/use-pizza-options";
import { getPizzaDetails } from "@/lib/utils";
import { PizzaSize, PizzaType } from "@/lib/constants";
import { useEffect, useRef } from "react";

export const ProductModalUI: React.FC<ProductModalUIProps> = ({ product }) => {
  if (!product) {
    return null;
  }

  const divRef = useRef<HTMLDivElement>(null);

  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(product.items);

  const { totalPrice, textDetaills } = getPizzaDetails(
    type,
    size,
    product.items,
    product.ingredients,
    selectedIngredients
  );

  return (
    <div className="grid grid-cols-[1.3fr_1fr]">
      <div className="flex place-items-center ml-3">
        <div className="flex-1 flex justify-center items-center">
          <img
            className={`object-cover transition-all duration-300 ${size === 20 && "w-80 h-80"} ${size === 25 && "w-90 h-90"} ${size === 30 && "w-100 h-100"} ${size === 35 && "w-120 h-120"}`}
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>
      <div className="p-5 bg-[#fafafa] rounded-tr-xl rounded-br-xl">
        <Title as="h2" text={product.name} className="text-3xl" />
        <span className="text-black/60 text-sm">{textDetaills}</span>
        <p className="text-[16px] text-black/80 mt-2">
          {product.ingredients
            .map((ingredient, index) => {
              if (index > 0) return ingredient.name.toLowerCase();

              return ingredient.name;
            })
            .join(", ")}
        </p>
        <div className="flex flex-col gap2">
          <ChooseForm
            onClick={(value) => setSize(Number(value) as PizzaSize)}
            formType="Размер"
            items={product.items}
            ingredients={product.ingredients}
          />
          <ChooseForm
            onClick={(value) => setType(Number(value) as PizzaType)}
            formType="Тесто"
            items={product.items}
            ingredients={product.ingredients}
          />
        </div>
        <div className="p-3">
          <Title as="h3" text="Добавить по вкусу" />
          <InredientCardList />
        </div>
        <div className="flex place-items-center py-2">
          <button className="flex-1 bg-orange-500 transition-colors duration-150 hover:bg-orange-600 rounded-2xl p-3 cursor-pointer">
            <span className="text-white">
              В корзину за {product.items[0].price} ₽
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
