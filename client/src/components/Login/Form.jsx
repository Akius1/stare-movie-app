import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { Error, FormLogin, FormNav } from "./LoginElements";
import Button from "./Button";

export const validateInput = (str = "") => str.includes("@");

const Form = ({ handleSubmit }) => {
  const [FormData, setFormData] = useState({});
  // const [password, setPasssword] = useState("99999999")
  const { push } = useHistory();
  const handleOnChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  // const handleOnChange1 = (e)=>{
  //   e.preventDefault();
  //   setPasssword((p)=> e.target.value)
  // }

  const onClick = async (e) => {
    e.preventDefault();
    console.log(FormData.email);

    const url = "http://localhost:3000/apiv1/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",

      body: JSON.stringify({
        email: FormData.email,
        password: FormData.password,
      }),
    });
    console.log(response.json());
    response.json();

    push("/");
  };

  return (
    <>
      <FormNav>
        <nav className="RegisterContainer-nav">
          <NavLink className="RegisterContainer-logo" to="/">
            <img src="./favicon-32x32.png" className="logo-img" alt="logo" />{" "}
            STARE
          </NavLink>
          <div className="auth-nav">
            <NavLink className="user-nav" to="/register">
              Sign Up
            </NavLink>
          </div>
        </nav>
      </FormNav>

      <FormLogin name="login-form" onSubmit={handleSubmit}>
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
          {" "}
          <input
            name="password"
            type={"password"}
            placeholder="Password"
            className="form-input"
            onChange={handleOnChange}
            // onChange={e => setPasssword(e.target.value)}
            // value={password}
          />
        </div>
        <Button buttonName="Log In" onClick={onClick} />
      </FormLogin>
    </>
  );
};

export default Form;
