import { ProductsMenuUI } from "../ui/products-menu/product-menu";

const items = [

  {
    category: 'Все',
  },
  {
    category: 'Мясные',
  },
  {
    category: 'Острые',
  },
  {
    category: 'Сладкие',
  },
  {
    category: 'Вегетарианские',
  },
  {
    category: 'С курицей',
  }

]

export const ProductMenu: React.FC = () => {
  return (
    <ProductsMenuUI title="Все пиццы" items={items} />
  )
}