import React from "react";
import { ChooseFormButtonUIProps } from "./types";
import { cn } from "@/lib/utils";

export const ChooseFormButtonUI: React.FC<ChooseFormButtonUIProps> = ({
  children,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className={cn(
        "flex justify-center z-10 p-1.5 flex-1 text-sm cursor-pointer transition-colors duration-150"
      )}
    >
      <button className="cursor-pointer">
        <span>{children}</span>
      </button>
    </li>
  );
};
