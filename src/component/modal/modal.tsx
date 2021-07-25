import React from "react";
import { createPortal } from "react-dom";
import { useModalContainer } from "../../hooks/useModalContainer";
import "./index.css";

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
  const shouldDisplay = visible;
  return shouldDisplay
    ? createPortal(
        <div className="modal__wrapper" onClick={onClose}>
          <section
            className="modal__content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h3 className="modal__header">{title}</h3>
            {children}
          </section>
        </div>,
        node
      )
    : null;
};
