import React from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./index.css";

interface ModalProps {
  visible?: boolean;
  onOk?: () => void;
  onClose?: () => void;
  title: string;
}

const modalContainer = document.getElementById(
  "modal-container"
) as HTMLElement;

export const Modal: React.FC<ModalProps> = ({ title, children, visible }) => {
  const { targetContainer, isClickOutside } = useClickOutside();
  const shouldDisplay = visible && !isClickOutside;
  return shouldDisplay
    ? createPortal(
        <div className="modal__wrapper">
          <section ref={targetContainer} className="modal__content">
            <h3 className="modal__header">{title}</h3>
            {children}
          </section>
        </div>,
        modalContainer
      )
    : null;
};
