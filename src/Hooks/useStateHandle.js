import { useState } from "react";

const useStateHandle = () => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  const handleName = (event) => {
    const inputName = event.target.value;
    setName({ value: inputName, error: "" });
  };
  const handleEmail = (event) => {
    const inputEmail = event.target.value;
    if (/\S+@\S+\.\S+/.test(inputEmail)) {
      setEmail({ value: inputEmail, error: "" });
    } else {
      setEmail({ value: "", error: "Please Provide a valid Email" });
    }
  };
  const handlePassword = (event) => {
    const inputPassword = event.target.value;
    if (inputPassword === "") {
      setPassword({ value: "", error: "Please Provide a Password" });
    } else if (inputPassword.length < 7) {
      setPassword({ value: "", error: "Password too short" });
    } else if (!/(?=.*[A-Z])/.test(inputPassword)) {
      setPassword({
        value: "",
        error: "Password must contain a capital letter",
      });
    } else {
      setPassword({ value: inputPassword, error: "" });
    }
  };

  const handleConfirmPassword = (event) => {
    const inputConfrimPassword = event.target.value;

    if (inputConfrimPassword !== password.value) {
      setConfirmPassword({ value: "", error: "Password doesn't match" });
    } else {
      setConfirmPassword({ value: inputConfrimPassword, error: "" });
    }
  };
  return {
    name,
    email,
    password,
    confirmPassword,
    handleName,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
  };
};

export default useStateHandle;
