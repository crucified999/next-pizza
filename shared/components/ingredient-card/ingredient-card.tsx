'use client';

import { IngredientCardUI } from "../ui/ingredient-card/ingredient-card";
import { IngredientCardProps } from "./types";
import React, { useState } from 'react';

export const IngredientCard: React.FC<IngredientCardProps> = ({ name, image, price }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }


  return <IngredientCardUI name={name} image={image} price={price} isActive={isActive} setIsActive={handleClick} />
}