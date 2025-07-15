import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { selectCurrentCategory, setCurrentCategory } from "@/shared/services/slices/nextPizzaSlice";
import { ProductsMenuItemUI } from "../ui/products-menu-item";
import { ProductsMenuItemProps } from "./types";
import { scrollToCategory } from "@/lib/utils";

export const ProductsMenuItem: React.FC<ProductsMenuItemProps> = ({ category }) => {

  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(selectCurrentCategory);

  const handleClick = () => {
    dispatch(setCurrentCategory(category));
    scrollToCategory(`category-${category.id}`);
  }

  return (
    <ProductsMenuItemUI
      id={category.id}
      isActive={currentCategory.id === category.id}
      name={category.name}
      createdAt={category.createdAt}
      updatedAt={category.updatedAt}
      onClick={handleClick}
    />  
  );
};
