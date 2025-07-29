import { useAppDispatch } from "@/shared/services/store";
import { ProductCategoryListUI } from "../ui/products-category-list";
import { setCurrentCategory } from "@/shared/services/slices/nextPizzaSlice";
import { useEffect } from "react";
import { Category } from "@prisma/client";
import { ProductUIProps } from "../ui/product/types";

export const ProductCategoryList = ({
  category,
  loading,
}: {
  category: Category & { products: ProductUIProps[] };
  loading: boolean;
}) => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const categoryList = document.getElementById(`category-${category.id}`);

  //   console.log(categoryList);

  //   if (!categoryList) return;

  //   const observer = new window.IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         dispatch(setCurrentCategory(category));
  //       }
  //     },
  //     { threshold: 0 }
  //   );

  //   return () => observer.disconnect();
  // }, []);

  return <ProductCategoryListUI category={category} />;
};
