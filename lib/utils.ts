import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToCategory = (id: string) => {
  const headerOffset = 54; // высота вашего фиксированного меню в px
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};