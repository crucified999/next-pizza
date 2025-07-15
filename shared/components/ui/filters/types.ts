import { TIngredient } from "@/shared/services/api/types";

export type FilterUIProps = {
  ingredients: TIngredient[];
  isLimit: boolean;
  loading: boolean;
  setIsLimit: () => void;
};