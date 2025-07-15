import { TCategoryWithRelations } from "@/types/prisma";

export type ProductsMenuItemProps = {
  category: Omit<TCategoryWithRelations, "products">;
}