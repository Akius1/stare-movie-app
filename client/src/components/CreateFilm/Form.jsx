import React, { useState } from "react";
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
            {movieCollection.map(
              ({
                Name,
                Description,
                ReleaseDate,
                TicketPrice,
                Country,
                Genre,
                ImageUrl,
              }) => (
                <>
                  <Card
                    name={Name}
                    description={Description}
                    releaseDate={ReleaseDate}
                    ticketPrice={TicketPrice}
                    country={Country}
                    genre={Genre}
                    imageUrl={ImageUrl}
                  />
                </>
              ),
            )}
          </ul>
        </ModalWrappers>
      </CreateFilmContainer>
    </>
  );
};

export default Form;
