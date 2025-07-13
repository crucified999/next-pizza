import { ProductsMenuItemUIProps } from "../products-menu-item/types";

export type ProductsMenuUIProps = {
  currentSortingCategory: string;
  title: string;
  items: ProductsMenuItemUIProps[];
  sortCategories: string[];
  isSortingMenuShown: boolean;
  onHover: () => void;
  onLeave: () => void;
}

