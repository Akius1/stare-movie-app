import React, { useState, useEffect } from "react";
import Film from "./Film";
import filmData from "./../LandingPage/filmData";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [film, setFilm] = useState({});

  const { filmid } = useParams();
  console.log(filmid);

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
  }, []);

  //console.log(film)

  return (
    <>
      <Film film={film} />
    </>
  );
};

export default SinglePage;
