import React from "react";

interface AllDoneProps {
  onClickOk: () => void;
}

export const AllDone: React.FC<AllDoneProps> = ({ onClickOk }) => {
  return (
    <section>
      <h3>All done!</h3>
      <p>
        You will be one of the first to experience Broccoli & Co. when we launch
      </p>
      <button onClick={onClickOk}>OK</button>
    </section>
  );
};
