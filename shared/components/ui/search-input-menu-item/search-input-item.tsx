import React from "react";
import Link from "next/link";
import { SearchInputMenuItemUIProps } from "./types";

export const SearchInputMenuItemUI: React.FC<SearchInputMenuItemUIProps> = ({
  name,
  image,
}) => {
  return (
    <li className="px-5 py-2 hover:bg-orange-100">
      <Link className="flex items-center gap-2" href="/">
        <img src={image} alt="pizza" className="w-7 h-7" />
        <span>{name}</span>
      </Link>
    </li>
  );
};
