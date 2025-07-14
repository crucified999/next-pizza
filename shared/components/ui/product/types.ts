import { TProductWithRelations } from "@/types/prisma";

// type TIngredient = {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// }

// export type ProductUIProps = {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   ingredients: TIngredient[];
//   categoryId: number;
// }

export type ProductUIProps = TProductWithRelations;