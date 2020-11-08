import React from "react";
import { NavLink } from "react-router-dom";

function Header({ setAllFilms }) {
  return (
    <nav className="PageContainer-nav">
      <NavLink className="PageContainer-logo" to="/">
        <img className="logo-img" src="./../Images/favicon-32x32.png" /> STARE
      </NavLink>

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
