import { cn } from "@/lib/utils";
import { SearchInputMenuItemUI } from "../search-input-menu-item";
import { SearchInputMenuUIProps } from "./types";

export const SearchInputMenuUI: React.FC<SearchInputMenuUIProps> = ({
  items,
  isFocused,
}) => {
  return (
    <div
      className={cn(
        "py-3 absolute border border-transparent rounded-[10px] top-16 left-0 w-full bg-white z-30 transition-all duration-150 invisble opacity-0",
        items.length && isFocused && "top-14 visible flex opacity-100"
      )}
    >
      <ul className="flex flex-col flex-1 gap-5">
        {items.map(
          (item, index) =>
            index < 5 && (
              <SearchInputMenuItemUI
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
              />
            )
        )}
      </ul>
    </div>
  );
};
