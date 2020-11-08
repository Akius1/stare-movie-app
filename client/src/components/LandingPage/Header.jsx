import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserData } from "./../Login/UserData";

function Header() {
  const { userInfo } = useContext(UserData);
  console.log(userInfo);

  function handleChange(params) {
    //console.log(params.target.value)
    //setAllFilms()
  }

  return (
    <nav className="PageContainer-nav">
      <NavLink className="PageContainer-logo" to="/">
        <img className="logo-img" src="./Images/favicon-32x32.png" /> STARE
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
        <NavLink className="user-nav" to={!userInfo.user ? "/login" : "/films"}>
          {!userInfo.user ? "Login" : userInfo.user.name}
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
