import React from "react";
import Link from "next/link";
import { SearchInputMenuItemUIProps } from "./types";

export const SearchInputMenuItemUI: React.FC<SearchInputMenuItemUIProps> = ({ title, image }) => {
  return (
    <li>  
        <Link className="flex items-center gap-2" href="/">
          <img src={image} alt="pizza" className="w-7 h-7" />
          <span>{title}</span>
        </Link>
    </li>
  );
}