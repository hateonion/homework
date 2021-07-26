import React, { ChangeEvent, useState } from "react";
import { login } from "../api/api";
import { Button } from "../component/button/button";
import { isEmail } from "../utils/validator";

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
  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [confirmEmailError, setConfirmEmailError] = useState(false);
  const [submitText, setSubmitText] = useState("Submit");

  const [loginError, setLoginError] = useState(false);

  const isSubmitAvailable =
    name !== "" && email !== "" && confirmedEmail !== "";

  const isButtonDisabled = !isSubmitAvailable || loading;
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

    setLoading(true);
    setSubmitText("Submitting");
    const result = await login(name, email);
    setSubmitText("Submit");
    setLoading(false);
    if (result.status !== 200) {
      setLoginError(true);
      return;
    }
    onSubmit();
  };
  return (
    <form>
      <input
        className="my-2 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        placeholder="Full name"
        name="name"
        onChange={setValueOnchange<string>(setName)}
        value={name}
      />
      {nameError && (
        <span className="text-xs italic text-red-500">
          length of username must {">"} 3
        </span>
      )}
      <input
        className="my-2 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        placeholder="Email"
        name="email"
        onChange={setValueOnchange<string>(setEmail)}
        value={email}
      />
      {emailError && (
        <span className="text-xs italic text-red-500">
          You must input a valid email address
        </span>
      )}
      <input
        className="my-2 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        placeholder="Confirm Email"
        name="confirmedEmail"
        onChange={setValueOnchange<string>(setConfirmedEmail)}
        value={confirmedEmail}
      />
      {confirmEmailError && (
        <span className="text-xs italic text-red-500">
          Please make sure you entered the same email address
        </span>
      )}
      <div className="flex justify-right">
        <Button
          className="w-full lg:w-1/4 ml-auto mr-0 justify-center lg:mr-0 mt-2"
          disabled={isButtonDisabled}
          onClick={submitHandler}
        >
          {submitText}
        </Button>
        {loginError && (
          <span className="text-xs italic text-red-500">server error</span>
        )}
      </div>
    </form>
  );
};
