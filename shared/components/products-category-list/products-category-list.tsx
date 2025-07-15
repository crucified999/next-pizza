import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { ProductCategoryListUI } from "../ui/products-category-list";
import {
  fetchIngredients,
  fetchProducts,
  selectIsLoading,
  selectProducts,
  setCurrentCategory,
} from "@/shared/services/slices/nextPizzaSlice";
import { useEffect } from "react";
import { Category } from "@prisma/client";
import { ProductUIProps } from "../ui/product/types";
import { SkeletonProduct } from "../ui/skeleton/skeleton-product";

export const ProductCategoryList = ({
  category,
  loading,
}: {
  category: Category & { products: ProductUIProps[] };
  loading: boolean;
}) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  // console.log(isLoading);

  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [dispatch]);

  if (loading) return <SkeletonProduct />;

  useEffect(() => {
    const categoryList = document.getElementById(`category-${category.id}`);
    console.log(categoryList);

    if (!categoryList) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(setCurrentCategory(category));
        }
      },
      { threshold: 0 }
    );

    return () => observer.disconnect();
  }, []);

  return <ProductCategoryListUI category={category} />;
};
