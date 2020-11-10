import React from "react";
import {  NavLink } from "react-router-dom";
import Button from "../Login/Button";
import {
    
    FormReset,
    FormNav,
    FormContainer,
    
  } from "./ResetElements";


const Form = () => {

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

            <NavLink className="user-nav" to="/login">
              Login
            </NavLink>
          </div>
        </nav>
      </FormNav>

      <FormContainer className="form-container">
        <FormReset name="login-form" /*onSubmit={handleSubmit}*/>
          <div className="logo">
            <img src="./favicon-32x32.png" alt="logo"></img>
            <h1>Stare</h1>
          </div>
          <div className="heading">Reset Password</div>
          <div>
            <input
              id="email"
              name="email"
              type={"email"}
              placeholder="Email"
            //   onChange={handleOnChange}
              className="form-input"
              required
            />
          </div>
          {/* {FormData.email && !validateInput(FormData.email) ? (
            <Error>email not valid</Error>
          ) : null} */}
         
          <Button buttonName="Recover Password" className="reset" /*onClick={onClick}*/ />
        </FormReset>
      </FormContainer>
    </>
  );
};

export default Form;

