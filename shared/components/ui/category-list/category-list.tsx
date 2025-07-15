import React, { useEffect, useState } from "react";
import { CategoryListUIProps } from "./types";
import { CategoryListItem } from "@/shared/components/category-list-item";
import { cn } from "@/lib/utils";
import { CartButton } from "@/shared/components/cart-button";
import { SkeletonCategoryList } from "../skeleton/skeleton-category-list";

export const CategoryListUI: React.FC<CategoryListUIProps> = ({
  items,
  loading,
}) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const header = document.getElementById("page-header");

    if (!header) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => setShowLogo(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "flex py-2 sticky top-0 bg-white z-10 gap-5 mt-10 items-center justify-between"
      )}
    >
      <div className="flex relative items-center">
        <img
          src="/logo.png"
          alt="logo"
          className={cn(
            "w-7 h-7 block transition-all duration-300",
            showLogo
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4 pointer-events-none hidden"
          )}
        />
        {loading ? (
          <SkeletonCategoryList />
        ) : (
          <ul
            className={cn(
              "py-2 px-2 rounded-2xl flex gap-1.25  transition-all duration-300",
              showLogo ? "ml-3 bg-white" : "ml-0 bg-[#F9FAFB]"
            )}
          >
            {items.map((item) => (
              <CategoryListItem key={item.id} category={item} />
            ))}
            <CategoryListItem
              category={{
                id: 0,
                name: "Ещё",
                createdAt: new Date(),
                updatedAt: new Date(),
              }}
            />
          </ul>
        )}
      </div>
      {/* <div onMouseEnter={onHover} onMouseLeave={onLeave} className="relative flex items-center gap-2">
        <Button variant="ghost" className={cn("bg-[#F9FAFB] py-5 font-bold cursor-pointer rounded-2xl", showLogo && "bg-white")}>
          <img src="/sort.svg" alt="sort" className="w-4 h-4" />
          <span>Сортировка по: </span>
          <span className="text-orange-500">{currentSortingCategory}</span>
        </Button>
        <SortingMenuUI isShown={isSortingMenuShown} categories={
          sortCategories.map((category) => ({ category }))
        } />
      </div> */}
      <div
        className={cn(
          "transition-all duration-300 min-w-[130px] flex justify-end",
          showLogo
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <CartButton />
      </div>
    </div>
  );
};
