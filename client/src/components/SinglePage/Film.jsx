import "./Style.css";
import React from "react";
import Header from "./Header";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import Rating from "./Rating";

const Film = ({ film, comments }) => {
  const logo = "./../Images/favicon-32x32.png";

  return (
    <>
      <Header logoLink={logo} />

      <div className="main-area">
        {film ? (
          <div className="info-area">
            <div className="img-info">
              <img
                className="single-img"
                src={film.image_link}
                alt="chintu-ka-birthday-2020.jpg"
              />
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
        ) : (
          <p>Loading...</p>
        )}

        <div className="commentArea">
          <div className="rating-div">
            <p>Rate film:{"  "}</p> <Rating filmId={film.id} />
          </div>

          <CommentForm filmId={film.id} />

          <Comment filmId={film.id} comments={comments} />
        </div>
      </div>

      <div className="footer-area">
        <p className="copyright">STARE Copyright &copy; 2020</p>
      </div>
    </>
  );
};

export default Film;
