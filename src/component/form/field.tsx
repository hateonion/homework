import React from "react";
import { Input } from "./input";

export enum FieldType {
  input,
}

export interface FieldProps {
  name: string;
  type: FieldType;
  placeholder: string;
  formModel: any;
}

export const Field: React.FC<FieldProps> = ({
  name,
  type,
  placeholder,
  formModel,
}) => {
  switch (type) {
    case FieldType.input:
      return (
        <Input name={name} placeholder={placeholder} formModel={formModel} />
      );
    default:
      return null;
  }
};
