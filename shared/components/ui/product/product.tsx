import { ProductUIProps } from "./types";
import { Title } from "../title/title";
import { MinusIcon, PlusIcon } from "lucide-react";

export const ProductUI: React.FC<ProductUIProps> = ({
  id,
  title,
  price,
  image,
  description,
  category,
  amount,
}) => {
  return (
    <article className="flex flex-col justify-between max-h-[430px] gap-4">
      <div>
        <div className="cursor-pointer flex items-center justify-center py-6 bg-[#FFF7EE] rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-[211px] h-[211px] object-cover transition-transform duration-250 hover:translate-y-1"
          />
        </div>
        <div>
          <Title as="h3" text={title} className="text-[22px]" />
          <p className="text-[14px] text-[#B1B1B1]">{description}</p>
        </div>
      </div>
      <footer className="flex justify-between items-center">
        <span className="text-[20px]">
          от <span className="font-bold">{price} ₽</span>
        </span>
        {amount === 0 ? (
          <button className="flex items-center gap-2 cursor-pointer px-5 py-2.5 bg-[#FFFAF4] rounded-2xl text-orange-500 transition-colors duration-250 hover:bg-[#ffebd3]">
            <PlusIcon />
            <span>Добавить</span>
          </button>
        ) : (
          <div className="flex justify-between items-center gap-4">
            <button className="flex justify-center items-center cursor-pointer w-[38px] h-[38px] text-orange-500 border border-orange-500 rounded-2xl">
              <MinusIcon />
            </button>
            <span>{amount}</span>
            <button className="flex justify-center items-center cursor-pointer w-[38px] h-[38px] text-white border bg-orange-500 rounded-2xl">
              <PlusIcon />
            </button>
          </div>
        )}
      </footer>
    </article>
  );
};
