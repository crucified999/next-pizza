import React from "react";
import { ChooseFormButtonUIProps } from "./types";

export const ChooseFormButtonUI: React.FC<ChooseFormButtonUIProps> = ({ children }) => {
  return (
    <li>
      <button>
        <span>{children}</span>
      </button>
    </li>
  )
}