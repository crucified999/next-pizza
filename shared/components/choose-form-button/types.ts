import { Variant } from "@/lib/types";
import { ReactNode } from "react";

// type TButtonType = "Теcто" | "Размер";

export type ChooseFormButtonProps = {
  children: ReactNode;
  buttonType: string;
  onClick?: (value: Variant["value"]) => void;
  value: {
    id: number;
    value: number;
  };
};
