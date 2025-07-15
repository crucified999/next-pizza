import { TCategoryWithRelations } from "@/types/prisma";
import { ProductCategoryListUIProps } from "../products-category-list/types";

export type ProductListUIProps = {
  categories: TCategoryWithRelations[];
  loading: boolean;
}