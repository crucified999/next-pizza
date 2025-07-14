export type TIngredient = {
  id: number;
  name: string;
  image: string;
  price: number;
  products: TProduct[];
}

export type TProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  ingredients: TIngredient[];
  categoryId: number;
}

export type TCategory = {
  id: number;
  name: string;
}