import { IngredientCardUIProps } from "./types";
import { cn } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";
import React from "react";

export const IngredientCardUI: React.FC<IngredientCardUIProps> = ({
  name,
  image,
  price,
  isActive,
  setIsActive,
}) => {
  return (
    <li
      onClick={setIsActive}
      className={cn(
        "relative flex border border-transparent flex-col items-center justify-center bg-white rounded-2xl p-2 cursor-pointer transition-shadow duration-200 shadow-lg hover:shadow-sm",
        isActive && "border-orange-500 shadow-none"
      )}
    >
      <img src={image} alt={`Ингредиент ${name}`} />
      <p className="text-center text-xs">{name}</p>
      <span className="text-sm font-semibold">{price} ₽</span>
      {isActive && (
        <CircleCheckBig className="absolute top-1 right-2 text-orange-500 w-5 h-5" />
      )}
    </li>
  );
};
