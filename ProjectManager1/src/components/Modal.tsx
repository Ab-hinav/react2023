import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button.tsx";

const Modal = forwardRef(function Modal({ children, ...props }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      {...props}
      ref={dialog}
      className=" p-4 border border-black backdrop-blur-2xl backdrop:bg-rose-50/90 rounded shadow-lg"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
