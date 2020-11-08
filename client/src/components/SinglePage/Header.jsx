// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { UserData, useUser } from "./../Login/UserData";

// function Header({ setAllFilms }) {
//   const [ userInfo, SetUserInfo ] = useUser();

//   console.log("from header", userInfo);

//   function loutOut(params) {
//     SetUserInfo({});
//   }
//   return (
//     <nav className="PageContainer-nav">
//       <NavLink className="PageContainer-logo" to="/">
//         <img className="logo-img" src="./../Images/favicon-32x32.png" /> STARE
//       </NavLink>

//       <div className="auth-nav">
//         <NavLink
//           onClick={loutOut}
//           className="user-nav"
//           to={!userInfo ? "/register" : "/films"}
//         >
//           {!userInfo ? "Sign Up" : "Log Out"}
//         </NavLink>{" "}
//         :
//         <NavLink className="user-nav" to={!userInfo ? "/login" : "/films"}>
//           {!userInfo ? "Login" : `Hi ${userInfo.name}`}
//         </NavLink>
//       </div>
//     </nav>
//   );
// }

// export default Header;
