import { IngredientCardUIProps } from "./types";
import React from 'react';

export const IngredientCardUI: React.FC<IngredientCardUIProps> = ({ name, image, price }) => {
  return (
    <li className="flex flex-col items-center justify-center bg-white rounded-2xl p-2 cursor-pointer transition-shadow duration-200 shadow-xl hover:shadow-sm">
      <img src={image} alt={`Ингредиент ${name}`} />
      <p className="text-center text-xs">{name}</p>
      <span className="text-sm font-semibold">{price} ₽</span>
    </li>
  )
}