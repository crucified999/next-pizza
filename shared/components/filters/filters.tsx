import { useAppSelector } from "../../services/store";
import { FiltersUI } from "../ui/filters";
import { selectIngredients, selectIsLoading } from "../../services/slices/nextPizzaSlice";
import { useState } from "react";

export const Filters = () => {
  const ingredients = useAppSelector(selectIngredients);
  const isLoading = useAppSelector(selectIsLoading);

  const [limit, setLimit] = useState(false);

  const handleClick = () => {
    setLimit(!limit);
  }

  return (
    <FiltersUI ingredients={ingredients} isLimit={limit} setIsLimit={handleClick} loading={isLoading} />
  )
}