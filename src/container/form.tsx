import React, { ChangeEvent, useState } from "react";
import { login } from "../api/api";
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
    const result = await login(name, email);
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
        placeholder="Full name"
        name="name"
        onChange={setValueOnchange<string>(setName)}
        value={name}
      />
      {nameError && <span>length of username must {">"} 3</span>}
      <input
        placeholder="Email"
        name="email"
        onChange={setValueOnchange<string>(setEmail)}
        value={email}
      />
      {emailError && <span>You must input a valid email address</span>}
      <input
        placeholder="Confirm Email"
        name="confirmedEmail"
        onChange={setValueOnchange<string>(setConfirmedEmail)}
        value={confirmedEmail}
      />
      {confirmEmailError && (
        <span>Please make sure you entered the same email address</span>
      )}
      <button type="button" disabled={isButtonDisabled} onClick={submitHandler}>
        Submit
      </button>
      {loginError && <span>server error</span>}
    </form>
  );
};
