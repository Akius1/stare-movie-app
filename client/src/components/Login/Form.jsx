import React, { useState } from "react";
import { Error, FormLogin } from "./LoginElements";
import Button from "./Button";

export const validateInput = (str = "") => str.includes("@");

const Form = () => {
  const [FormData, setFormData] = useState({});

  const handleOnChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  return (
    <FormLogin name="login-form">
      <div className="logo">
        <img src="./favicon-32x32.png" alt="logo"></img>
        <h1>Stare</h1>
      </div>
      <div className="heading">Log in</div>
      <div>
        <input
          id="email"
          name="email"
          type={"email"}
          placeholder="Email"
          onChange={handleOnChange}
          className="form-input"
        />
      </div>
      {FormData.email && !validateInput(FormData.email) ? (
        <Error>Email not valid</Error>
      ) : null}
      <div>
        <input
          name="password"
          type={"password"}
          placeholder="Password"
          className="form-input"
        />
      </div>
      <Button buttonName="Log In" />
    </FormLogin>
  );
};

export default Form;
