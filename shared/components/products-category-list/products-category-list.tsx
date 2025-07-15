import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { ProductCategoryListUI } from "../ui/products-category-list";
import { fetchIngredients, fetchProducts, selectProducts, setCurrentCategory } from "@/shared/services/slices/nextPizzaSlice";
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
}