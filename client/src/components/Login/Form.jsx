import React, { useState, useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { Error, FormLogin, FormNav } from "./LoginElements";
import Button from "./Button";
import { UserData, useUser } from "./UserData";

export const validateInput = (str = "") => str.includes("@");

const Form = ({ handleSubmit }) => {
  const [userInfo, SetuserInfo] = useUser();
  const [FormData, setFormData] = useState({});
  const [res, setRes] = useState("");
  const { push } = useHistory();
  const handleOnChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const onClick = async (e) => {
    const url = "https://staremovieapp.herokuapp.com/apiv1/login/";
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
    let data = await response.json().then((val) => {
      return val;
    });
    console.log("loginnnnn");
    setRes(data.name);
    localStorage.setItem("userData", JSON.stringify(data));

    const { user } = JSON.parse(localStorage.getItem("userData")) || "";
    SetuserInfo(user);

    push({
      pathname: "/",
      state: {
        key: res,
      },
    });
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
            required
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
            required
            onChange={handleOnChange}
          />
        </div>
        <Button buttonName="Log In" onClick={onClick} />
      </FormLogin>
    </>
  );
};

export default Form;
