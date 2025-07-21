"use client";

import React, { useEffect, useState } from "react";
import { ChooseFormButtonUI } from "../ui/choose-form-button";
import { ChooseFormButtonProps } from "./types";
import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import {
  selectPizzaSize,
  selectPizzaType,
  setPizzaSize,
  setPizzaType,
} from "@/shared/services/slices/nextPizzaSlice";

export const ChooseFormButton: React.FC<ChooseFormButtonProps> = ({
  children,
  buttonType,
  value,
  onClick,
}) => {
  // const dispatch = useAppDispatch();
  // const pizzaSize = useAppSelector(selectPizzaSize);
  // const pizzaType = useAppSelector(selectPizzaType);

  // const isActive = buttonType === 'Теcто' ? pizzaType === value.value : pizzaSize === value.value;

  const handleClick = () => {
    const divEl = document.getElementById(`active-${buttonType}`);

    divEl!.style.translate = `${100 * value.id}%`;

    if (value.id !== 0) {
      divEl!.style.left = `-4px`;
    } else {
      divEl!.style.left = "4px";
    }

    onClick?.(String(value.value));

    // if (buttonType === 'Теcто') {
    //   dispatch(setPizzaType(value.value));

    // } else {
    //   dispatch(setPizzaSize(value.value));
    // }
  };
  return <ChooseFormButtonUI children={children} onClick={handleClick} />;
};
