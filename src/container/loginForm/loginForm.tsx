import React, { ChangeEvent, useState } from "react";
import { login } from "../../api/api";
import { Button } from "../../component/button/button";
import { Input } from "../../component/form/input";
import { useLoading } from "../../hooks/useLoading";
import { hasError, useValidation } from "../../hooks/useValidation";
import { isEmail } from "../../utils/validator";

interface LoginFormProps {
  onSubmit: () => void;
}

function setValueOnchange<T>(
  setFunction: React.Dispatch<React.SetStateAction<T>>
) {
  return (e: ChangeEvent) => {
    setFunction((e.target as any).value);
  };
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmedEmail, setConfirmedEmail] = useState("");

  const [loginError, setLoginError] = useState(false);
  const { errors, validate } = useValidation([
    {
      name: "name",
      value: name,
      validationFn: (value: string) => value.length >= 3,
    },
    {
      name: "email",
      value: email,
      validationFn: (value: string) => isEmail(value),
    },
    {
      name: "confirmedEmail",
      value: confirmedEmail,
      validationFn: (value: string) => value === email,
    },
  ]);

  const isSubmitAvailable =
    name !== "" && email !== "" && confirmedEmail !== "";

  const submitHandler = async () => {
    setLoginError(false);
    const validationResult = validate();
    if (Object.keys(validationResult).length > 0) {
      return;
    }
    const result = await login(name, email);
    if (result.status !== 200) {
      setLoginError(true);
      return;
    }
    onSubmit();
  };

  const { loading, triggerWithLoading } = useLoading(submitHandler);

  const buttonText = loading ? "Sending" : "Send";
  const isButtonDisabled = !isSubmitAvailable || loading;
  return (
    <form>
      <Input
        name="name"
        placeholder="Full name"
        onChange={setValueOnchange<string>(setName)}
        value={name}
        error={hasError(errors, "name")}
        errorText="length of username must > 3"
      />
      <Input
        name="email"
        placeholder="Email"
        onChange={setValueOnchange<string>(setEmail)}
        value={email}
        error={hasError(errors, "email")}
        errorText="You must input a valid email address"
      />
      <Input
        name="confirmedEmail"
        placeholder="Confirm Email"
        onChange={setValueOnchange<string>(setConfirmedEmail)}
        value={confirmedEmail}
        error={hasError(errors, "confirmedEmail")}
        errorText="Please make sure you entered the same email address"
      />
      <div className="flex flex-col items-center">
        <Button
          className="w-full lg:w-1/4 ml-auto mr-0 lg:mr-0 my-2"
          disabled={isButtonDisabled}
          onClick={triggerWithLoading}
        >
          {buttonText}
        </Button>
        {loginError && (
          <span className="text-xs italic text-red-500">server error</span>
        )}
      </div>
    </form>
  );
};
