import React, { useState, useEffect } from "react";
import Film from "./Film";
import filmData from "./../LandingPage/filmData";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [film, setFilm] = useState({});

  const { filmid } = useParams();

  useEffect(async () => {
    const url2 = `http://localhost:3000/apiv1/films/film_id/${filmid}`;
    const response = await fetch(url2, {
      method: "GET",
      redirect: "follow",
    });
    let filmData = await response
      .json()
      .then((val) => {
        return val;
      })
      .then((film) => {
        console.log(film[0]);
        setFilm(film[0]);
      });
  });
  const theData = filmData.find((item) => item._id === filmid);

  React.useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    // write fetch request for single page data
    setFilm(theData);
  }, []);

  return (
    <>
      <Film film={film} />
    </>
  );
};

export default SinglePage;
