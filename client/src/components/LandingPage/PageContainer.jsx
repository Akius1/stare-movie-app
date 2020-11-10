import React from "react";
import "./Home.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { useUser } from "../Login/UserData";

//import { StyleDisplay } from "./landingPage.style.js";

const PageContainer = ({ allFilms }) => {
  const [data, setData] = useState([]);
  const [ratings, setRating] = useState([]);

  useEffect(async () => {
    const url = "https://staremovieapp.herokuapp.com/apiv1/films";
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
    });
    let userData = await response
      .json()
      .then((val) => {
        return val;
      })
      .then((user1) => {
        setData(user1);
        //console.log(user1);
      });
  }, []);

  const logo = "./Images/favicon-32x32.png";
  return (
    <>
      <Header logoLink={logo} setFilmData={setData} />
      <div className="main-area">
        <div className="grid-wrapper">
          {/* data && */}
          {data.length > 0 ? (
            data.map((ten, i) => {
              //console.log(ten);
              return (
                <Display
                  key={i}
                  name={ten.name}
                  description={ten.description}
                  id={ten.id}
                  ticket={ten.ticket_price}
                  image={ten.image_link}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className="footer-area">
        <p className="copyright">STARE Copyright &copy; 2020</p>
      </div>
    </>
  );
};

function Display({ name, description, id, ticket, image }) {
  return (
    <div className="PageContainer-item" key={id}>
      <div className="pix-box">
        <Link to={`/films/${id}`}>
          <img className="movie-poster" src={image} alt="movie poster" />
        </Link>
      </div>
      <Link className="title-txt" to={`/films/${id}`}>
        <div>
          <p>{name}</p>
        </div>
      </Link>
      <div className="title-txt">
        <p>Rating: {description}</p>
      </div>
      <div className="title-txt">
        <p>Ticket Price: ${ticket}</p>
      </div>
    </div>
  );
}
export default PageContainer;
