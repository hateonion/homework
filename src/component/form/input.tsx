import React, { FormEventHandler } from "react";

interface InputProps {
  name: string;
  placeholder: string;
  value: any;
  onChange: FormEventHandler;
  error: boolean;
  errorText: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  value,
  onChange,
  error,
  errorText,
}) => {
  return (
    <>
      <input
        className="my-2 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && (
        <span className="text-xs italic text-red-500">{errorText}</span>
      )}
    </>
  );
};
