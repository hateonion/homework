import React, { MouseEventHandler } from "react";
import { createPortal } from "react-dom";
import { useModalContainer } from "../../hooks/useModalContainer";

interface ModalProps {
  visible?: boolean;
  onClose?: () => void;
  onOk: MouseEventHandler;
  title: string;
  okText: string;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  children,
  visible,
  onClose,
  okText,
  onOk,
}) => {
  const { node } = useModalContainer();
  const shouldDisplay = visible;
  return shouldDisplay
    ? createPortal(
        <div
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
            {/* <Button
              className="mr-0 ml-auto flex"
              disabled={isButtonDisabled}
              onClick={onOk}
            >
              Submit
            </Button> */}
          </section>
        </div>,
        node
      )
    : null;
};
