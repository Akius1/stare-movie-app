import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FormNav,
  CreateFilmContainer,
  GlobalStyle,
  ModalWrappers, VideoBg, CreateContent, HeroBg
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
      <HeroBg>
    <VideoBg autoPlay loop muted src = {'../../../video.mp4'} type="video/mp4" />

    
  </HeroBg>
  <CreateContent>
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
        </CreateContent>
      </CreateFilmContainer>
    </>
  );
};

export default Form;


// import Video from '../../videos.mp4'

// <HeroContainer>
//   <HeroBg>
//     <VideoBg autoPlay loop muted src = {Video} type="video/mp4" />

    
//   </HeroBg>
// </HeroContainer>

//lade rename the video to video.mp4, also drop the video in the project structure

// export const HeroBg = styled.div`
// position: absolute;
// top: o;
// right:0;
// bottom: 0;
// left: 0;
// width: 100%;
// height: 100%;
// overflow: hidden;

// `

// export const VideoBg = styled.video`
// width: 100%;
// height: 100%;
// -o-object-fit: cover;
// object-fit: cover;
// background: #232a34;
// `


// export const CreateCotainer = styled.div`
// background: #0c0c0c;
// display: flex;
// justify-content: center;
// align-items: center;
// padding: 0 30px;
// height: 880px;
// position: relative;
// z-index: 1;

// `

// export const CreateContent = styled.div`
// z-index: 3;
// max-width:1200px;
// position: absolute;
// padding: 8px; 
// display: flex;
// flex-direction: column;
// align-items: center;

// `