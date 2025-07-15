import { cn } from "@/lib/utils";
import { Button } from "../button/button";
import { CartButtonUIProps } from "./types";
import { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";

export const CartButtonUI: React.FC<CartButtonUIProps> = ({
  counter,
  price,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      {counter ? (
        <Button
          variant="default"
          className={cn(
            "bg-orange-500 duration-300 rounded-2xl font-bold text-[16px] w-[130px] h-[50px] flex items-center justify-center overflow-hidden",
            hovered && "bg-orange-500"
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="flex items-center justify-center w-full relative">
            <span
              className={cn(
                "transition-opacity duration-300 flex items-center justify-center w-full",
                hovered ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            >
              <span>{price} ₽ </span>
              <span className="h-6 w-[1px] bg-white/30 mx-3"></span>
              <ShoppingCartIcon className="w-4 h-4" strokeWidth={2} />
              <span className="ml-2">{counter}</span>
            </span>
            <span
              className={cn(
                "transition-opacity duration-300 text-[16px] w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white",
                hovered ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              В корзину
            </span>
          </span>
        </Button>
      ) : (
        <div>
          <Button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variant="outline"
            className={cn(
              "border border-orange-400 rounded-2xl flex items-center justify-center overflow-hidden w-[50px] h-[50px] p-0",
              hovered && "bg-orange-500 w-[130px]"
            )}
          >
            <span className="flex items-center justify-center w-full relative">
              <span
                className={cn(
                  "transition-opacity duration-300 flex items-center justify-center w-full",
                  hovered ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                <img
                  src="/cart.svg"
                  alt="cart"
                  className="w-4 h-4 [filter:brightness(0)_saturate(100%)_invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(346deg)_brightness(118%)_contrast(119%)]"
                />
              </span>
              <span
                className={cn(
                  "transition-opacity duration-300 text-[16px] w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white",
                  hovered ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                В корзину
              </span>
            </span>
          </Button>
        </div>
      )}
    </div>
  );
};
