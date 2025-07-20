export type IngredientCardUIProps = {
  name: string;
  image: string;
  price: number;
  isActive: boolean;
  setIsActive: () => void;
}