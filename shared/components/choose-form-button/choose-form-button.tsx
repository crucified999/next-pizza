import React, { useState } from "react"
import { ChooseFormButtonUI } from "../ui/choose-form-button"
import { ChooseFormButtonProps } from "./types"
import { useAppDispatch, useAppSelector } from "@/shared/services/store"
import { selectPizzaSize, selectPizzaType } from "@/shared/services/slices/nextPizzaSlice"

export const ChooseFormButton: React.FC<ChooseFormButtonProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const pizzaSize = useAppSelector(selectPizzaSize);
  const pizzaType = useAppSelector(selectPizzaType);
  const [isActive, setIsActive] = useState<boolean>(false);

  console.log(document.querySelector<HTMLInputElement>('#input')!.value);

  const handleClick = () => {
    setIsActive(isActive);
  }

  return <ChooseFormButtonUI children={children} onClick={handleClick} />
}