import { X } from "lucide-react";

import { ModalUIProps } from "./types";

export const ModalUI: React.FC<ModalUIProps> = ({ children, onClose }) => {
  return (
    <>
      <div className="absolute w-screen h-screen top-0 left-0 bg-black/70 z-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl min-w-250">
        <button
          onClick={onClose}
          className="transition-transform duration-200 hover:scale-110 absolute cursor-pointer flex items-center justify-center top-5 -right-15 rounded-[50%] bg-white w-[50px] h-[50px]"
        >
          <X />
        </button>
        <div className="flex min-w-200 min-h-125">{children}</div>
      </div>
    </>
  );
};
