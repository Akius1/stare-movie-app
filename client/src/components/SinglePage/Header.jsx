import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserData } from "./../Login/UserData";

function Header({ setAllFilms }) {
  const { userInfo, SetUserInfo } = useContext(UserData);
  function loutOut(params) {
    SetUserInfo({});
  }
  return (
    <nav className="PageContainer-nav">
      <NavLink className="PageContainer-logo" to="/">
        <img className="logo-img" src="./../Images/favicon-32x32.png" /> STARE
      </NavLink>

      <div className="auth-nav">
        <NavLink
          onClick={loutOut}
          className="user-nav"
          to={!userInfo.user ? "/register" : "/films"}
        >
          {!userInfo.user ? "Sign Up" : "Log Out"}
        </NavLink>{" "}
        :
        <NavLink className="user-nav" to={!userInfo.user ? "/login" : "/films"}>
          {!userInfo.user ? "Login" : `Hi ${userInfo.user.name}`}
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
