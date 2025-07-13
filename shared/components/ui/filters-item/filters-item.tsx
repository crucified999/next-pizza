import { Input } from "../input/input";
import { Label } from "../label/label";
import { Checkbox } from "../checkbox/checkbox";
import { FiltersItemUIProps } from "./types";

export const FiltersItemUI: React.FC<FiltersItemUIProps> = ({ type }) => {
  return (
    <div className="flex items-center gap-2">
      <Label htmlFor={type}>
        <Checkbox className="w-6 h-6 accent-orange-500" />
        {type}
      </Label>
    </div>
  );
};
