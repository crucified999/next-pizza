"use client";

import { ProductsMenuItemUIProps } from "./types";
import { Button } from "../button/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ProductsMenuItemUI: React.FC<ProductsMenuItemUIProps> = ({ category }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <li onClick={() => setIsActive(!isActive)} className={cn(isActive && "bg-white shadow rounded-2xl")}>
      <Button variant="ghost" className="cursor-pointer">
        <span>{category}</span>
      </Button>
    </li>
  )
}