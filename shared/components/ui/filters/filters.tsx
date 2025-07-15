import { Input } from "../input/input";
import { Button } from "../button/button";
import { FiltersItemUI } from "../filters-item";
import { Title } from "../title/title";

export const FiltersUI = () => {
  return (
    <aside className="flex flex-col items-start gap-7.5 sticky top-20 left-0 h-screen bg-white z-20">
      <Title as="h3" text="Фильтрация" className="text-[22px]" />
      <div className="flex flex-col gap-2">
        <FiltersItemUI type="Можно собирать" />
        <FiltersItemUI type="Новинки" />
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
        <div className="flex flex-col gap-3 mt-5 items-start">
          <FiltersItemUI type="Сырный соус" />
          <FiltersItemUI type="Моцарелла" />
          <FiltersItemUI type="Чеснок" />
          <FiltersItemUI type="Соленые огурчики" />
          <FiltersItemUI type="Курица" />
          <button className="cursor-pointer text-orange-500">
            + Показать всё
          </button>
        </div>
      </div>
      <Button variant="default" className="bg-orange-500 rounded-[18px] w-full">
        Применить
      </Button>
    </aside>
  );
};
