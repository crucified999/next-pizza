import {
  fetchCategories,
  fetchIngredients,
  fetchProducts,
  selectIsLoading,
} from "@/shared/services/slices/nextPizzaSlice";
import { useEffect } from "react";
import { SkeletonProduct } from "../ui/skeleton/skeleton-product";
import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { AppHeader } from "../app-header";
import { CategoryList } from "../category-list";
import { Filters } from "../filters";
import { ProductList } from "../products-list";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(fetchIngredients()),
      dispatch(fetchCategories()),
      dispatch(fetchProducts()),
    ]);
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <CategoryList />
      <main className="grid grid-cols-[min-content_1fr] gap-15 mt-10">
        <Filters />
        <ProductList />
      </main>
    </>
  );
};
