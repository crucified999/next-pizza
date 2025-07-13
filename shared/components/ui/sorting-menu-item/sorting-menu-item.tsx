import { Button } from "../button/button";
import { SortingMenuItemUIProps } from "./types";

export const SortingMenuItemUI: React.FC<SortingMenuItemUIProps> = ({ category, setSortedBy }) => {
  return (
    <li>
      <Button onClick={() => setSortedBy(category)} variant="ghost" className="cursor-pointer hover:text-orange-500">
        <span>{category}</span>
      </Button>
    </li>
  )
}