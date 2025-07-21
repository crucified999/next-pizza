"use client";

import { useRouter } from "next/navigation";
import { ModalUI } from "../ui/modal/modal";
import { ModalProps } from "./types";
import { useEffect } from "react";

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return <ModalUI onClose={handleOpenChange}>{children}</ModalUI>;
};
