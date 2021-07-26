import React, { useState } from "react";
import { AllDone } from "../allDone/allDone";
import { LoginForm } from "../loginForm/loginForm";
import { useModal } from "../../hooks/useModal";
import { Button } from "../../component/button/button";
import "./index.css";
import { Modal } from "../../component/modal/modal";

export const Main: React.FC = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { visible, setVisibility } = useModal(() => {
    setLoginSuccess(false);
  });

  const modalTitle = loginSuccess ? "All done!" : "Request";

  return (
    <main className="flex-grow flex flex-col justify-center items-center">
      <h2 className="mb-6 text-gray-700 lg:text-5xl text-2xl text-center font-extrabold font-sans">
        A better way to enjoy every day
      </h2>
      <span className="text-xl text-gray-500 mb-6">
        Be the first to know when we launch
      </span>
      <Button
        onClick={() => {
          setVisibility(true);
        }}
      >
        Request an invite
      </Button>
      <Modal
        okText="Submit"
        title={modalTitle}
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
