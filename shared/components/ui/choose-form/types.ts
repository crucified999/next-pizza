// import { ForwardedRef, ReactNode, RefObject } from "react";

import { Variant } from "@/lib/types";

// type TButtonType = "Теcто" | "Размер";

// type TButton = {
//   buttonType: TButtonType;
//   value: number;
// }

// export type ChooseFormUIProps = {
//   buttons: TButton[];
// }

export type ChooseFormUIProps = {
  items: readonly Variant[];
  onClick?: (value: Variant['value']) => void;
  value?: Variant['value'];
  formType: 'Тесто' | 'Размер';
  className?: string;
}