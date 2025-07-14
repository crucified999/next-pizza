import { ProductCategoryListUI } from "../products-category-list/products-category-list";
import { ProductListUIProps } from "./types";

export const ProductListUI: React.FC<ProductListUIProps> = ({ categories }) => {
  
  return (
    <div className="flex flex-col gap-13">
      {categories.map((category) => (
        <ProductCategoryListUI key={category.id} category={category} /> 
      ))}
    </div>
  )
}   