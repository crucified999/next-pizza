import { cn } from "@/lib/utils";
import { TitleProps } from "./types";

export const Title: React.FC<TitleProps> = ({ as: Tag = 'h1', text, className }) => {
  return (
    <Tag className={cn("font-bold", className)}>{text}</Tag>
  )
}