'use client';

import { useRouter } from "next/navigation";
import { ModalUI } from "../ui/modal/modal";
import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  }

  return <ModalUI onOpenChange={handleOpenChange}>
   {children}
  </ModalUI>
}