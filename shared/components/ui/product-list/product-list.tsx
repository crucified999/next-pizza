import { ProductUI } from "../product/product";
import { ProductListUIProps } from "./types";

export const ProductListUI: React.FC<ProductListUIProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(285px,1fr))] gap-13">
      {products.map((product) => (
        <ProductUI key={product.id} {...product} />
      ))}
    </div>
  )
}