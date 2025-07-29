"use client";

import { useAppDispatch, useAppSelector } from "@/shared/services/store";
import { ProductListUI } from "../ui/products-list/products-list";
import { useEffect, useRef } from "react";
import {
  fetchCategories,
  selectCategories,
  setCurrentCategory,
  selectIsLoading,
} from "@/shared/services/slices/nextPizzaSlice";
import { SkeletonProduct } from "../ui/skeleton/skeleton-product";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const isLoading = useAppSelector(selectIsLoading);
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    if (!categories.length) return;

    const handler = (entries: IntersectionObserverEntry[]) => {
      console.log(
        "IntersectionObserver triggered, isProgrammaticScroll:",
        isProgrammaticScroll.current
      );

      // Работаем только при ручном скролле
      if (isProgrammaticScroll.current) {
        console.log("Skipping IntersectionObserver due to programmatic scroll");
        return;
      }

      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        const id = visible[0].target.id.replace("category-", "");
        const category = categories.find((cat) => String(cat.id) === id);

        if (category) {
          console.log(
            "Setting category via IntersectionObserver:",
            category.name
          );
          dispatch(setCurrentCategory(category));
        }
      }
    };

    const observer = new window.IntersectionObserver(handler, {
      root: null,
      threshold: 0.5,
    });

    categories.forEach((category) => {
      const el = document.getElementById(`category-${category.id}`);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories, dispatch]);

  useEffect(() => {
    (window as any).setProgrammaticScroll = (value: boolean) => {
      console.log("Setting programmatic scroll flag:", value);
      isProgrammaticScroll.current = value;

      if (value) {
        setTimeout(() => {
          console.log("Auto-resetting programmatic scroll flag");
          isProgrammaticScroll.current = false;
        }, 1000);
      }
    };
  }, []);

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  return <ProductListUI categories={categories} loading={isLoading} />;
};
