"use client";

import { AppHeader } from "@/shared/components/app-header";
import { CategoryList } from "@/shared/components/category-list";
import { Provider } from "react-redux";
import { store, useAppDispatch, useAppSelector } from "@/shared/services/store";
import { Filters } from "@/shared/components/filters";
import { ProductList } from "@/shared/components/products-list";
import { useEffect } from "react";
import {
  fetchCategories,
  fetchIngredients,
  fetchProducts,
  selectIsLoading,
} from "@/shared/services/slices/nextPizzaSlice";
import { SkeletonProduct } from "@/shared/components/ui/skeleton/skeleton-product";
import { HomePage } from "@/shared/components/pages";

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
      {/* <AppHeader />
      <CategoryList />
      <main className="grid grid-cols-[min-content_1fr] gap-15 mt-10">
        <Filters />
        <ProductList />
      </main> */}
    </Provider>
  );
}
