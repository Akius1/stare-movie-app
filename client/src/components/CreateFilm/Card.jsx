import React from "react";
import { CardContainer } from "./CreateFilmElements";
import Swal from "sweetalert2";
const Card = ({
  id,
  name,
  description,
  releaseDate,
  ticketPrice,
  country,
  genre,
  imageUrl,
}) => {
  const handleDelete = async () => {
    const url = `http://localhost:3000/apiv1/films/delete/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    }).catch((error) => {
      console.log(error);
    });
    let data = await response.json().then((val) => {
      return val;
    });
    console.log(data);
    Swal.fire("Movie Deleted");
  };

  return (
    <CardContainer>
      <div className="pix-box">
        <img className="movie-poster" src={imageUrl} alt="movie poster" />
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
        <button className="addNew-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </CardContainer>
  );
};

export default Card;
