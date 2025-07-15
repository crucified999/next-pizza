import { ProductUI } from "../product/product";
import { ProductCategoryListUIProps } from "./types";
import { Title } from "../title/title";

const Category: Record<number, string> = {
  1: "Пиццы",
  2: "Комбо",
  3: "Закуски",
  4: "Коктейли",
  5: "Кофе",
  6: "Напитки",
  7: "Десерты",
  8: "Соусы",
  9: "Другие товары",
}

export const ProductCategoryListUI: React.FC<ProductCategoryListUIProps> = ({ category }) => {
  return (
    <div className="flex flex-col gap-13">
      {
        category.products.length > 0 &&
        <>
          <Title as="h3" text={Category[category.id]} className="text-[36px]"/>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(285px,1fr))] gap-13">
          {category.products.map((product) => (
            <ProductUI key={product.id} {...product} />
            ))}
          </div>
        </>
      }
    </div>
  )
}