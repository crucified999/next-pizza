import { Category } from "@prisma/client";

export type ProductsMenuItemUIProps = {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  onClick: () => void;
}