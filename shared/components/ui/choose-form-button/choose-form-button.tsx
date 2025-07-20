import React from "react";
import { ChooseFormButtonUIProps } from "./types";

export const ChooseFormButtonUI: React.FC<ChooseFormButtonUIProps> = ({ children, onClick }) => {
  return (
    <li onClick={onClick} className="flex justify-center flex-1 text-sm">
      <input type="button" id="input" />
      <span>{children}</span>
    </li>
  );
}