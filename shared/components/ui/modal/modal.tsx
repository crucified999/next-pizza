

import { Dialog, DialogContent, DialogTitle } from "../dialog/dialog";

import { ModalUIProps } from "./types";

export const ModalUI: React.FC<ModalUIProps> = ({ children, onOpenChange }) => {
  return (
    <Dialog open={!!children} onOpenChange={onOpenChange}>
      <DialogTitle>
        Modal
      </DialogTitle>  
      <DialogContent className="min-w-200 min-h-125">{children}</DialogContent>
    </Dialog>
  );
};
