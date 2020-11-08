import React from "react";
import "./Home.css";
// import { Link } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useUser } from "../Login/UserData";

const PageContainer = ({ allFilms }) => {
  const display = allFilms.map((item, index) => {
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
  const logo = "./Images/favicon-32x32.png";

  return (
    <>
      <Header logoLink={logo} />

      <div className="main-area">
        <div className="grid-wrapper">{display}</div>
      </div>

      <div className="footer-area"></div>
    </>
  );
};

export default PageContainer;
