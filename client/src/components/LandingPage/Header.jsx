import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserData, useUser } from "./../Login/UserData";

function Header({ logoLink }) {
  const [userInfo, SetUserInfo] = useUser();
  function handleChange(params) {}

  const [name, setName] = React.useState(userInfo);
  const history = useHistory();

  React.useEffect(() => {
    setName(userInfo);
  }, [userInfo]);

  function loutOut(params) {
    localStorage.clear("userData");

    window.location.reload();
    setTimeout(() => {
      SetUserInfo({});
    }, 2000);
  }

  return (
    <nav className="PageContainer-nav">
      <NavLink className="PageContainer-logo" to="/">
        <img className="logo-img" src={logoLink} alt="" /> STARE
      </NavLink>

      <input
        className="srch-box"
        type="search"
        placeholder="Search..."
        onChange={handleChange}
      />

      <div className="auth-nav">
        <NavLink
          onClick={loutOut}
          className="user-nav"
          to={userInfo === undefined ? "/register" : "/films"}
        >
          {userInfo === undefined ? "Sign Up" : "Log Out"}
        </NavLink>{" "}
        :
        <NavLink
          className="user-nav"
          to={userInfo === undefined ? "/login" : "/films"}
        >
          {!userInfo ? "Login" : `Hi ${userInfo.name}`}
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
