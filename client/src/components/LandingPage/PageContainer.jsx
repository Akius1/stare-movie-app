import "./Home.css";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const PageContainer = ({ image, filmData }) => {
  //console.log(filmData)
  const display = filmData.map((item, index) => {
    //console.log(item);
    return (
      <div className="PageContainer-item" key={item._id}>
        <div className="pix-box">
          <Link to={`/films/${item._id}`}>
            <img
              className="movie-poster"
              src={`./Images/${item.Photo}`}
              alt="movie poster"
            />
          </Link>
        </div>
        <Link className="title-txt" to={`/films/${item._id}`}>
          <div>
            <p>{item.name}</p>
          </div>
        </Link>
        <div className="title-txt">
          <p>Rating: {item.rating}</p>
        </div>
        <div className="title-txt">
          <p>Ticket Price: {item.ticketPrice}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <nav className="PageContainer-nav">
        <NavLink className="PageContainer-logo" to="/">
          <img className="logo-img" src="./Images/favicon-32x32.png" /> STARE
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
