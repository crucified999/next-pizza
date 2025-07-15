"use client";

import { CategoryListItemUIProps } from "./types";
import { Button } from "../button/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const CategoryListItemUI: React.FC<CategoryListItemUIProps> = ({ id, name, isActive, createdAt, updatedAt, onClick }) => {
  return (
    <li onClick={onClick} className={cn(isActive && "bg-white shadow rounded-2xl text-orange-500")}>
      <Button variant="ghost" className="cursor-pointer">
        <span>{name}</span>
        { name === "Ещё" && <img src="/arrow-down.svg" alt="arrow-down" /> }
      </Button>
    </li>
  )
} 