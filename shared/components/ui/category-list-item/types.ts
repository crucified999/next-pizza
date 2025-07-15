export type CategoryListItemUIProps = {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  onClick: () => void;
}