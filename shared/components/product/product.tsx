import { ProductUI } from "../ui/product/product";

export const Product: React.FC = () => {
  return (
    <ProductUI
      id="1"
      title="Пицца"
      price={100}
      image="/pizza.png"
      description="Описание"
      category="Пицца"
      amount={0}
    />
  )
}