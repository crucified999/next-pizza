import { CategoryListItemUIProps } from "../category-list-item/types";

export type CategoryListUIProps = {
  items: Omit<CategoryListItemUIProps, "onClick">[];
  loading: boolean;
};
