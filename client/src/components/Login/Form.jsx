import React, { useState } from "react";
import { Error, FormLogin } from "./LoginElements";

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
      <div className="form-input">
        <input
          id="email"
          name="email"
          type={"email"}
          placeholder="Email"
          onChange={handleOnChange}
        />
      </div>
      {FormData.email && !validateInput(FormData.email) ? (
        <Error>Email not valid</Error>
      ) : null}
      <div className="form-input">
        <input name="password" type={"password"} placeholder="Password" />
      </div>
      <div className="btn">Login</div>
    </FormLogin>
  );
};

export default Form;
