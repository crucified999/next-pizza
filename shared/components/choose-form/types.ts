import { Variant } from "@/lib/types";
import { ingredients } from "@/prisma/constants";
import { Ingredient, ProductItem } from "@prisma/client"

export type ChooseFormProps = {
  formType: 'Тесто' | 'Размер';
  items: ProductItem[];
  ingredients: Ingredient[];
  onClick?: (value: Variant['value']) => void;
}