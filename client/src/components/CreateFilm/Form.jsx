import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FormNav,
  CreateFilmContainer,
  GlobalStyle,
  ModalWrappers,
} from "./CreateFilmElements";
import Button from "./../Login/Button";
import Modal from "./Modal";
import Card from "./Card";

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const [movieCollection, setMovieCollection] = useState([]);
  console.log("heelo", movieCollection);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
        setMovieCollection(user1);
      });
  }, []);

  return (
    <>
      <FormNav>
        <nav className="RegisterContainer-nav">
          <NavLink className="RegisterContainer-logo" to="/">
            <img src="./favicon-32x32.png" className="logo-img" alt="logo" />{" "}
            STARE
          </NavLink>
        </nav>
      </FormNav>
      <CreateFilmContainer>
        <Button onClick={openModal} buttonName="Add a Film" />
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          insert={setMovieCollection}
        />
        <GlobalStyle />
        <ModalWrappers>
          <ul>
            {movieCollection.map((movie, i) => (
              <>
                <Card
                  i={movie.id}
                  name={movie.name}
                  description={movie.description}
                  releaseDate={movie.release_date}
                  ticketPrice={movie.ticket_price}
                  country={movie.country}
                  genre={movie.genre}
                  imageUrl={movie.image_link}
                />
              </>
            ))}
          </ul>
        </ModalWrappers>
      </CreateFilmContainer>
    </>
  );
};

export default Form;
