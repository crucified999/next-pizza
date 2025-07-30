import { TProductWithRelations } from "@/types/prisma";

export type ProductModalUIProps = {
  product: TProductWithRelations | null;
  ingredientsPrice?: number;
};
