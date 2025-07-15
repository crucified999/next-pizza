import { Input } from "../input/input";
import { Button } from "../button/button";
import { FiltersItemUI } from "../filters-item";
import { Title } from "../title/title";
import { FilterUIProps } from "./types";
import { SkeletonIngredients } from "../skeleton/skeleton-ingredients";

export const FiltersUI: React.FC<FilterUIProps> = ({
  ingredients,
  isLimit,
  loading,
  setIsLimit,
}) => {
  const limit = isLimit ? ingredients.length : 5;

  return (
    <aside className="flex flex-col items-start gap-7.5 sticky top-20 left-0 h-screen bg-white z-20">
      <Title as="h3" text="Фильтрация" className="text-[22px]" />
      <div className="flex flex-col gap-2">
        <FiltersItemUI name="Можно собирать" />
        <FiltersItemUI name="Новинки" />
      </div>
      <hr className="w-full" />
      <div>
        <Title as="h4" text="Цена от и до:" className="text-[16px]" />
        <div className="flex gap-4 justify-start mt-4">
          <Input type="number" placeholder="0" className="w-[90px]" />
          <Input type="number" placeholder="1950" className="w-[90px]" />
        </div>
      </div>
      <hr className="w-full" />
      <div>
        <Title as="h4" text="Ингредиенты:" />
        <div className="flex flex-col gap-3 mt-5 items-start overflow-y-auto max-h-[300px] min-h-[140px]">
          {loading ? (
            <SkeletonIngredients />
          ) : (
            ingredients.map(
              (ingredient, index) =>
                index < limit && (
                  <FiltersItemUI key={ingredient.id} name={ingredient.name} />
                )
            )
          )}
        </div>
        <button
          onClick={setIsLimit}
          className="cursor-pointer text-orange-500 mt-5"
        >
          {!isLimit ? "+ Показать всё" : "- Скрыть"}
        </button>
      </div>
      <Button variant="default" className="bg-orange-500 rounded-[18px] w-full">
        Применить
      </Button>
    </aside>
  );
};
