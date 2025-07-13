import { Button } from "../button/button";
import { ProductsMenuItemUI } from "../products-menu-item";
import { ProductsMenuUIProps } from "./types";

export const ProductsMenuUI: React.FC<ProductsMenuUIProps> = ({ items, title }) => {
  return (

    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">{title}</h1>
      
      <ul className="py-1.5 px-1 rounded-2xl flex gap-1.25 bg-[#F9FAFB]">
        {items.map((item) => (
          <ProductsMenuItemUI key={item.category} category={item.category} />
        ))}
        <li className="bg-transparent shadow rounded-2xl">
          <Button variant="ghost">
            <span>Еще</span>
          </Button>
        </li>
      </ul>
    </div>
    
  )
}