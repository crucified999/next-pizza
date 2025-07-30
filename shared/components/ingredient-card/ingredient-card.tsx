'use client';

import { useAppDispatch } from "@/shared/services/store";
import { IngredientCardUI } from "../ui/ingredient-card/ingredient-card";
import { IngredientCardProps } from "./types";
import React, { useState } from 'react';
import { addIngredient, removeIngredient } from "@/shared/services/slices/nextPizzaSlice";

export const IngredientCard: React.FC<IngredientCardProps> = ({ id, name, image, price }) => {

  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    if (isActive) dispatch(removeIngredient({ id, name, price }));
    else dispatch(addIngredient({ id, name, price }));
    

    setIsActive(!isActive);
  }

  return <IngredientCardUI name={name} image={image} price={price} isActive={isActive} setIsActive={handleClick} />
}