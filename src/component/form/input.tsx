import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { useEventCallback } from "rxjs-hooks";
import { FieldProps } from "./field";
import { map, tap } from "rxjs/operators";

type InputProps = Pick<FieldProps, "name" | "placeholder" | "formModel">;

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  formModel,
}) => {
  const [errors, setErrors] = useState([]);
  const [clickCallback, value] = useEventCallback((event$) =>
    event$.pipe(
      map((event) => [event.target.value]),
      tap((value) => {
        formModel.foo = value;
        console.log(formModel);
      })
    )
  );
  return (
    <div className="form-field__input">
      <input
        onChange={clickCallback}
        type="text"
        name={name}
        required
        placeholder={placeholder}
      />
    </div>
  );
};
