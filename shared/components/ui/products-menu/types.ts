import { ProductsMenuItemUIProps } from "../products-menu-item/types";

export type ProductsMenuUIProps = {
  items: Omit<ProductsMenuItemUIProps, "onClick">[];
}

