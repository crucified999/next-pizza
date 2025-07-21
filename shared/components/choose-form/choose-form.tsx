import React, { useRef } from "react";
import { ChooseFormUI } from "../ui/choose-form";
import { ChooseFormUIProps } from "../ui/choose-form/types";
import { ChooseFormProps } from "./types";
import { getPizzaDetails } from "@/lib/utils";
import { usePizzaOptions } from "@/hooks/use-pizza-options";
import { PizzaSize, PizzaType, pizzaTypes } from "@/lib/constants";

export const ChooseForm: React.FC<ChooseFormProps> = ({
  formType,
  items,
  ingredients,
  onClick
}) => {
  const {
    size,
    type,
    availableSizes,
  } = usePizzaOptions(items);
  
  // const { totalPrice, textDetaills } = getPizzaDetails(
  //   type,
  //   size,
  //   items,
  //   ingredients,
  //   selectedIngredients
  // );

  // const handleClickAdd = () => {
  //   if (currentItemId) {
  //     onSubmit(currentItemId, Array.from(selectedIngredients));
  //   }
  // };

  if (formType === "Размер") {
    return (
      <ChooseFormUI
        formType={formType}
        items={availableSizes}
        value={String(size)}
        onClick={onClick} // (value) => setSize(Number(value) as PizzaSize)
      />
    );
  }

  return (
    <ChooseFormUI
      formType={formType}
      items={pizzaTypes}
      value={String(type)}
      onClick={onClick} // (value) => setType(Number(value) as PizzaType)
    />
  );
};
