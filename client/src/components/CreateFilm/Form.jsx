import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FormNav,
  CreateFilmContainer,
  GlobalStyle,
} from "./CreateFilmElements";
import Button from "./../Login/Button";
import Modal from "./Modal";

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
          <div className="auth-nav">
            <NavLink className="user-nav" to="/register">
              Sign Up
            </NavLink>
          </div>
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
        <ul>
          {movieCollection.map(({ Name, Description }) => (
            <>
              <li>{Name}</li>
              <li>{Description}</li>
              {/* // <Card name={Name} /> */}
            </>
          ))}
        </ul>
      </CreateFilmContainer>
    </>
  );
};

export default Form;
