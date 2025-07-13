import { SortingMenuUIProps } from "./types";
import { SortingMenuItem } from "../../sorting-menu-item";

export const SortingMenuUI: React.FC<SortingMenuUIProps> = ({ categories, isShown }) => {
  return (
    <div className={`absolute w-full top-0 left-0 transition-all linear duration-150 delay-300 ${isShown ? 'opacity-100 visible top-10' : 'opacity-0 invisible'}`}>
      <ul className="flex bg-white flex-col rounded-xl">
        {categories.map((category) => (
          <SortingMenuItem key={category.category} category={category.category} />
        ))}
      </ul>
    </div>
  )
}