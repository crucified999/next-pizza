import { Category, Ingredient, Product, ProductItem } from '@prisma/client';

export type TProductWithRelations = Product & { ingredients: Ingredient[], items: ProductItem[] };
export type TCategoryWithRelations = Category & { products: TProductWithRelations[] };