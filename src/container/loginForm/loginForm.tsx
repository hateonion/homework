import React, { ChangeEvent, useState } from "react";
import { login } from "../../api/api";
import { Button } from "../../component/button/button";
import { Input } from "../../component/form/input";
import { useLoading } from "../../hooks/useLoading";
import { isEmail } from "../../utils/validator";

interface LoginFormProps {
  onSubmit: () => void;
}

function setValueOnchange<T>(
  setFunction: React.Dispatch<React.SetStateAction<T>>
) {
  return (e: ChangeEvent) => {
    setFunction(e.target.value);
  };
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmedEmail, setConfirmedEmail] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [confirmEmailError, setConfirmEmailError] = useState(false);

  const [loginError, setLoginError] = useState(false);

  const isSubmitAvailable =
    name !== "" && email !== "" && confirmedEmail !== "";

  const submitHandler = async () => {
    if (name.length <= 3) {
      setNameError(true);
      return;
    }
    if (!isEmail(email)) {
      setEmailError(true);
      return;
    }
    if (email !== confirmedEmail) {
      setConfirmEmailError(true);
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

  const buttonText = loading ? "Submitting" : "Submit";
  const isButtonDisabled = !isSubmitAvailable || loading;
  return (
    <form>
      <Input
        name="name"
        placeholder="Full name"
        onChange={setValueOnchange<string>(setName)}
        value={name}
        error={nameError}
        errorText="length of username must > 3"
      />
      <Input
        name="email"
        placeholder="Email"
        onChange={setValueOnchange<string>(setEmail)}
        value={email}
        error={emailError}
        errorText="You must input a valid email address"
      />
      <Input
        name="confirmedEmail"
        placeholder="Confirm Email"
        onChange={setValueOnchange<string>(setConfirmedEmail)}
        value={confirmedEmail}
        error={confirmEmailError}
        errorText="Please make sure you entered the same email address"
      />
      <div className="flex justify-right">
        <Button
          className="w-full lg:w-1/4 ml-auto mr-0 justify-center lg:mr-0 mt-2"
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
