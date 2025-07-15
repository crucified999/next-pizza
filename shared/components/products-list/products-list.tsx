import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { ProductListUI } from "../ui/products-list/products-list";
import { useEffect } from "react";
import {
  fetchCategories,
  selectCategories,
  setCurrentCategory,
} from "@/shared/services/slices/nextPizzaSlice";
import { fetchProducts } from "@/shared/services/slices/nextPizzaSlice";


export const ProductList = () => {

  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    if (!categories.length) return;

    const handler = (entries: IntersectionObserverEntry[]) => {
      // Найти первую видимую секцию
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        const id = visible[0].target.id.replace("category-", "");
        const category = categories.find(cat => String(cat.id) === id);

        if (category) {
          dispatch(setCurrentCategory(category));
        }
      }
    };

    const observer = new window.IntersectionObserver(handler, {
      root: null,
      threshold: 0.5, // секция видна хотя бы наполовину
    });

    categories.forEach(category => {
      const el = document.getElementById(`category-${category.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();

  }, [categories, dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return <ProductListUI categories={categories} />;
};
