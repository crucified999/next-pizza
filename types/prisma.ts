import { Category, Ingredient, Product } from '@prisma/client';

export type TProductWithRelations = Product & { ingredients: Ingredient[] };
export type TCategoryWithRelations = Category & { products: TProductWithRelations[] };