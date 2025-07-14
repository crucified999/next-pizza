import React, { useEffect, useRef, useState } from "react";
import { Button } from "../button/button";
import { ProductsMenuItemUI } from "../products-menu-item";
import { SortingMenuUI } from "../sorting-menu";
import { ProductsMenuUIProps } from "./types";
import { cn } from "@/lib/utils";

export const ProductsMenuUI: React.FC<ProductsMenuUIProps> = ({ currentSortingCategory, items, title, sortCategories, isSortingMenuShown, onHover, onLeave }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const header = document.getElementById("page-header");
    console.log(header);
    if (!header) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => setShowLogo(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={menuRef} className={cn("flex sticky top-0 bg-white z-10 gap-5 mt-10 items-center justify-between")}> 
      
      <div className="flex relative items-center">
        {/* <h1 className="text-4xl font-bold">{title}</h1> */}
        {showLogo && (
          <img src="/logo.png" alt="logo" className="w-7 h-7 transition-opacity duration-300" />
        )}
        <ul
          className={cn(
            "py-1 px-2 rounded-2xl flex justify-start gap-1.25  transition-all duration-300",
            showLogo ? "ml-2 bg-white" : "ml-0 bg-[#F9FAFB]"
          )}
        >
          {items.map((item) => (
            <ProductsMenuItemUI
              key={item.id}
              id={item.id}
              name={item.name}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
            />
          ))}
          <ProductsMenuItemUI id={0} name="Ещё" createdAt={new Date()} updatedAt={new Date()} />
        </ul>
      </div>
      <div onMouseEnter={onHover} onMouseLeave={onLeave} className="relative flex items-center gap-2">
        <Button variant="ghost" className={cn("bg-[#F9FAFB] py-5 font-bold cursor-pointer rounded-2xl", showLogo && "bg-white")}>
          <img src="/sort.svg" alt="sort" className="w-4 h-4" />
          <span>Сортировка по: </span>
          <span className="text-orange-500">{currentSortingCategory}</span>
        </Button>
        <SortingMenuUI isShown={isSortingMenuShown} categories={
          sortCategories.map((category) => ({ category }))
        } />
      </div>
    </div>
  )
}