import "./Home.css";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const PageContainer = (props) => {
  const display = props.image.map((item, index) => {
    console.log(item);
    return (
      <div className="PageContainer-item" key={index}>
        <div className="pix-box">
          <Link to={`/films/${index}`}>
            <img
              className="movie-poster"
              src={`./Images/${item}`}
              alt="movie poster"
            />
          </Link>
        </div>
        <div className="title-txt">
          <p>Title:</p>
        </div>
        <div className="title-txt">
          <p>Rating: 5</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <nav className="PageContainer-nav">
        <NavLink className="PageContainer-logo" to="/">
          <i class="fas fa-film"></i>STARE
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

      <div className="main-area">
        <div className="grid-wrapper">{display}</div>
      </div>

      <div className="footer-area"></div>
    </>
  );
};

export default PageContainer;
