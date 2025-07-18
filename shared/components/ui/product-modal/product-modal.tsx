import { ProductModalUIProps } from "./types";
import { IngredientCardUI } from "../ingredient-card/ingredient-card";
import { Title } from "../title/title";

export const ProductModalUI: React.FC<ProductModalUIProps> = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="flex items-center justify-center">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="p-3 bg-[#fafafa]">
        <Title as="h2" text={product.name} className="text-2xl" />
        <p className="text-sm text-black/60">
          {product.ingredients
            .map((ingredient, index) => {
              if (index > 0) return ingredient.name.toLowerCase();
              return ingredient.name;
            })
            .join(", ")}
        </p>
        <div className="flex flex-col gap2">
          <ul className="flex p-2">
            {product.items.map((item) => (
              <li key={item.id}>
                <button>
                  <span>{item.size}</span>
                </button>
              </li>
            ))}
          </ul>
          <ul className="flex p-2">
            {product.items.map((item) => (
              <li key={item.id}>
                <button>
                  <span>{item.pizzaType}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3">
          <Title as="h3" text="Добавить по вкусу" />
          <ul className="grid grid-cols-3 gap-2 mt-2 max-h-[300px] overflow-y-auto">
            {product.ingredients.map((ingredient, index) => (
              <IngredientCardUI key={index} {...ingredient} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
