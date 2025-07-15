import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import {
  selectCurrentCategory,
  setCurrentCategory,
} from "@/shared/services/slices/nextPizzaSlice";
import { CategoryListItemUI } from "../ui/category-list-item";
import { CategoryListItemProps } from "./types";
import { scrollToCategory } from "@/lib/utils";

export const CategoryListItem: React.FC<CategoryListItemProps> = ({ 
  category,
}) => {
  const dispatch = useAppDispatch();  
  const currentCategory = useAppSelector(selectCurrentCategory);

  const handleClick = () => {
    dispatch(setCurrentCategory(category));
    scrollToCategory(`category-${category.id}`);
  };

  return (
    <CategoryListItemUI
      id={category.id}
      isActive={currentCategory.id === category.id}
      name={category.name}
      createdAt={category.createdAt}
      updatedAt={category.updatedAt}
      onClick={handleClick}
    />
  );
};
