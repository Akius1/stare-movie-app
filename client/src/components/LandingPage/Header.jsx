import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserData, useUser } from "./../Login/UserData";

function Header() {
  const [userInfo, SetUserInfo] = useUser();
  console.log(userInfo, "from748");
  function handleChange(params) {
    //console.log(params.target.value)
    //setAllFilms()
  }

  const [name, setName] = React.useState(userInfo);
  const history = useHistory();

  React.useEffect(() => {
    setName(userInfo);
  }, [userInfo]);

  console.log(name, "from name");

  function loutOut(params) {
    localStorage.clear("userData");

    window.location.reload();
    setTimeout(() => {
      SetUserInfo({});
    }, 2000);

    //history.push("/")
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
