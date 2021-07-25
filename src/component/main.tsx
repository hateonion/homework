import React, { useEffect, useState } from "react";
import { AllDone } from "../container/allDone";
import { LoginForm } from "../container/form";
import { useModal } from "../hooks/useModal";
import "./index.css";
import { Modal } from "./modal/modal";

export const Main: React.FC = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { visible, setVisibility } = useModal(() => {
    setLoginSuccess(false);
  });

  return (
    <main className="flex-grow flex flex-col justify-center items-center">
      <h2>A better way to enjoy every day </h2>
      <span>Be the first to know when we launch</span>
      <button
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => {
          setVisibility(true);
        }}
      >
        Request an invite
      </button>
      <Modal
        title="Requst"
        visible={visible}
        onClose={() => {
          setVisibility(false);
        }}
      >
        {loginSuccess ? (
          <AllDone
            onClickOk={() => {
              setVisibility(false);
            }}
          />
        ) : (
          <LoginForm
            onSubmit={() => {
              setLoginSuccess(true);
            }}
          />
        )}
      </Modal>
    </main>
  );
};
