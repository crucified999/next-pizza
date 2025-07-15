import { TCategoryWithRelations } from "@/types/prisma";

export type CategoryListItemProps = {
  category: Omit<TCategoryWithRelations, "products">;
};