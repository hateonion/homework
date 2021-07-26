import React from "react";
import { createPortal } from "react-dom";
import { useModalContainer } from "../../hooks/useModalContainer";

interface ModalProps {
  visible?: boolean;
  onClose?: () => void;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  children,
  visible,
  onClose,
}) => {
  const { node } = useModalContainer();
  return visible
    ? createPortal(
        <div
          role="dialog"
          className="min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none"
          onClick={onClose}
        >
          <div className="absolute z-0 inset-0 overflow-auto bg-black opacity-40" />
          <section
            className="relative flex flex-col items-center justify-center w-full max-w-lg mx-auto my-auto rounded-xl bg-white p-5"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h3 className="text-xl lg:text-2xl font-bold py-4 text-gray-600">
              {title}
            </h3>
            <div className="py-4">{children}</div>
          </section>
        </div>,
        node
      )
    : null;
};
