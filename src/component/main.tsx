import React from "react";
import { useModal } from "../hooks/useModal";
import "./index.css";
import { Modal } from "./modal/modal";

export const Main: React.FC = () => {
  const { visible, toggleModalVisible } = useModal();
  return (
    <div className="main">
      <h2>A better way to enjoy every day</h2>
      <span>Be the first to know when we launch</span>
      <button
        onClick={() => {
          toggleModalVisible();
        }}
      >
        Request an invite
      </button>
      <Modal title="Requst" visible={visible} />
    </div>
  );
};
