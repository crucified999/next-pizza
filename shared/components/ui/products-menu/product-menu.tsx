import { Button } from "../button/button";
import { ProductsMenuItemUI } from "../products-menu-item";
import { SortingMenuUI } from "../sorting-menu";
import { ProductsMenuUIProps } from "./types";

export const ProductsMenuUI: React.FC<ProductsMenuUIProps> = ({ currentSortingCategory, items, title, sortCategories, isSortingMenuShown, onHover, onLeave }) => {
  return (

    <div className="flex gap-5 mt-10 items-end justify-between">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">{title}</h1>
        
        <ul className="py-1.5 px-2 rounded-2xl flex justify-start gap-1.25 bg-[#F9FAFB]">
          {items.map((item) => (
            <ProductsMenuItemUI key={item.category} category={item.category} />
          ))}
          <ProductsMenuItemUI category="Ещё" />
        </ul>
      </div>
      
          <div onMouseEnter={onHover} onMouseLeave={onLeave} className="relative flex items-center gap-2">
            <Button variant="ghost" className="bg-[#F9FAFB] font-bold cursor-pointer">
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