import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { ProductCategoryListUI } from "../ui/products-category-list";
import { fetchIngredients, fetchProducts, selectProducts } from "@/shared/services/slices/nextPizzaSlice";
import { useEffect } from "react";
import { Category } from "@prisma/client";
import { ProductUIProps } from "../ui/product/types";
 
export const ProductCategoryList = ({ category }: { category: Category & { products: ProductUIProps[] } }) => {

  const dispatch = useAppDispatch();
  // const category = useAppSelector(selectCategoryById);

  useEffect(() => {
    Promise.all([
      dispatch(fetchProducts()),
      dispatch(fetchIngredients()),
    ])
  }, [dispatch]);

  return <ProductCategoryListUI category={category} />;
}