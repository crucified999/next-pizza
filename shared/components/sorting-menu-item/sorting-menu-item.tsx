import { useState } from "react";
import { SortingMenuItemUI } from "../ui/sorting-menu-item";
import { SortingMenuItemProps } from "./types";
import { useAppDispatch } from "../../services/store";
import { setSortingCategory } from "@/shared/slices/nextPizzaSlice";

export const SortingMenuItem: React.FC<SortingMenuItemProps> = ({ category }) => {
  const dispatch = useAppDispatch();
  
  const handleSortingCategory = () => {
    dispatch(setSortingCategory(category));
  }

  return (
    <SortingMenuItemUI category={category} setSortedBy={handleSortingCategory} />
  )
}