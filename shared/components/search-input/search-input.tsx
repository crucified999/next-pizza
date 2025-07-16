import { useState } from "react";
import { SearchInputUI } from "../ui/search-input/search-input";

export const SearchInput = () => {

  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <SearchInputUI onChange={onChange} value={value} />;
};