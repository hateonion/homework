import React from "react";
import { Button } from "../component/button/button";

interface AllDoneProps {
  onClickOk: () => void;
}

export const AllDone: React.FC<AllDoneProps> = ({ onClickOk }) => {
  return (
    <div className="flex flex-col">
      <p className="text-gray-500 text-center my-2 text-lg">
        You will be one of the first to experience Broccoli & Co. when we launch
      </p>
      <div className="flex justify-right">
        <Button
          className="w-full lg:w-1/4 ml-auto mr-0 justify-center lg:mr-0 mt-2"
          onClick={onClickOk}
        >
          OK
        </Button>
      </div>
    </div>
  );
};
