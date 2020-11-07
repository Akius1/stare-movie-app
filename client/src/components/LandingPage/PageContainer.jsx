import "./Home.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PageContainer = () => {
  const [allFilms, setAllFilms] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllFilms(data));
  }, []);

  useEffect(() => {
    console.log(allFilms);
  }, [allFilms]);

  return (
    <>
      <nav className="main-nav">
        <NavLink className="main-logo" to="/">
          <i class="fas fa-film"></i>STARE
        </NavLink>
      </nav>

      <div className="main-area">
        <div className="grid-wrapper">
          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/city-of-salt-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/borat-subsequent-moviefilm-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/chintu-ka-birthday-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/dau-degeneratsiya-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/dave-chappelle-the-kennedy-center-mark-twain-prize-for-american-humor-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/dil-bechara-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/faith-based-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/im-thinking-of-ending-things-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/midnight-delight-2016.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/still-here-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/the-boys-in-the-band-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/the-social-dilemma-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="pix-box">
              <img
                className="movie-poster"
                src="./Images/tyler-perrys-madeas-farewell-play-2020.jpg"
                alt="movie poster"
              />
            </div>
            <div className="title-txt">
              <p>Title:</p>
            </div>
            <div className="title-txt">
              <p>Rating: 5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-area"></div>
    </>
  );
};

export default PageContainer;
