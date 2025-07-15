import { ProductUI } from "../ui/product/product";

export const Product: React.FC = () => {
  return (
    <ProductUI
      id={1}
      name="Пицца"
      image="/pizza.png"
      categoryId={1}            
      createdAt={new Date()}
      updatedAt={new Date()}
      ingredients={[]}
      items={[
        {
          id: 1,
          productId: 1,
          price: 100,
          size: 1,
          pizzaType: 1,
        }
      ]}
    />
  )
}