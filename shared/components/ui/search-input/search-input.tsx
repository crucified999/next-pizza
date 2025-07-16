import { Input } from "../input/input";
import { SearchInputMenu } from "../../search-input-menu/search-input-menu";
import { SearchInputUIProps } from "./types";
import { useState } from "react";

export const SearchInputUI: React.FC<SearchInputUIProps> = ({ onChange, value }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      {isFocused && (
        <div className="absolute top-0 left-0 bg-black/60 z-30 w-full h-full" />
      )}

      <div className="bg-white flex items-center rounded-[15px] py-2 px-5 flex-1 relative z-30 border border-transparent transition-colors duration-150 has-[:focus]:border-gray-300">
        <img src="/search.svg" alt="search" className="w-4 h-4" />
        <Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
          type="text"
          placeholder="Поиск пиццы"
          className="w-full focus:outline-none border-none bg-transparent"
        />

        <SearchInputMenu isFocused={isFocused} value={value} />
      </div>
    </>
  );
};
