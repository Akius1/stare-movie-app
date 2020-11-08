import "./Style.css";
// import { Link } from "react-router-dom";
import React from "react";
import Header from "./Header";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
//import { url } from "inspector";

const Film = ({ film }) => {
  return (
    <>
      <Header />

      <div className="main-area">
        <div className="info-area">
          <div className="img-info">
            <img
              className="single-img"
              src={film.image_link}
              alt="chintu-ka-birthday-2020.jpg"
            />
            {/* <h1>{film.name}</h1> */}
          </div>

          <div className="text-info">
            <div>
              <h3>Nmae: {film.name}</h3>
            </div>

            <div>
              <h3>Ticket Price: ${film.ticket_price}</h3>
            </div>

            <div>
              <h3>Country: {film.country}</h3>
            </div>

            <div>
              <p>Description: {film.description}</p>
            </div>

            <div>
              <p>
                Genre:{" "}
                {film.Genre
                  ? film.Genre.map((item) => item + " ")
                  : `loading...`}
              </p>
            </div>

            <div>
              <p>Rating: {film.rating}</p>
            </div>
          </div>
        </div>
        <div className="commentArea">
          <CommentForm id={film._id} />

          <div>
            {film.comments ? (
              <Comment comments={film.comments} />
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
      </div>

      <div className="footer-area"></div>
    </>
  );
};

export default Film;
