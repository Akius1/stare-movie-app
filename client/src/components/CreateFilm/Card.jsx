import React from "react";
import { CardContainer } from "./CreateFilmElements";

const Card = ({
  name,
  description,
  releaseDate,
  ticketPrice,
  country,
  genre,
  imageUrl,
}) => {
  return (
    <CardContainer>
      <div className="pix-box">
        <img className="movie-poster" src={`imageUrl`} alt="movie poster" />
      </div>
      <div className="cards">
        <div className="title-txt">
          <p>Name:{name}</p>
        </div>

        <div className="title-txt">
          <p>Description: {description}</p>
        </div>
        <div className="title-txt">
          <p>Release Date: {releaseDate}</p>
        </div>
        <div className="title-txt">
          <p>Ticket Price: {ticketPrice}</p>
        </div>
        <div className="title-txt">
          <p>Country: {country}</p>
        </div>
        <div className="title-txt">
          <p>Genre: {genre}</p>
        </div>
        <div className="title-txt">
          <p>ImageUrl: {imageUrl}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
