import React, { MouseEventHandler } from "react";
import { computeDisableStyle } from "./helper";

export interface ButtonProps {
  disabled?: boolean;
  onClick: MouseEventHandler;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      disabled={disabled}
      className={`${computeDisableStyle(
        disabled
      )} ${className} py-4 px-10 lg:py-2.5 lg:px-5 text-lg lg:text-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
