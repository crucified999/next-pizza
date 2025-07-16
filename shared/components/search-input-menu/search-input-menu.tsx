import { SearchInputMenuUI } from "../ui/search-input-menu/search-input-menu";
import { useAppSelector } from "../../services/store";
import { selectProducts } from "../../services/slices/nextPizzaSlice";
import { SearchInputMenuProps } from "./types";

export const SearchInputMenu: React.FC<SearchInputMenuProps> = ({ isFocused, value }) => {
  const products = useAppSelector(selectProducts);

  const items = products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));

  return <SearchInputMenuUI items={items} isFocused={isFocused} />;
};