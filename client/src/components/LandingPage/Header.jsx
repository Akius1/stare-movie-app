import React from "react";
import { NavLink } from "react-router-dom";

function Header({ setAllFilms }) {
  function handleChange(params) {
    //console.log(params.target.value)
    //setAllFilms()
  }

  return (
    <nav className="PageContainer-nav">
      <NavLink className="PageContainer-logo" to="/">
        <img className="logo-img" src="./Images/favicon-32x32.png" alt="" />{" "}
        STARE
      </NavLink>
      <input
        className="srch-box"
        type="search"
        placeholder="Search..."
        onChange={handleChange}
      />

      <div className="auth-nav">
        <NavLink className="user-nav" to="/register">
          Sign Up
        </NavLink>
        <NavLink className="user-nav" to="/login">
          Log In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
