import React, { useState, useEffect } from "react";
import Film from "./Film";
import filmData from "./../LandingPage/filmData";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [film, setFilm] = useState({});

  const { filmid } = useParams();

  const theData = filmData.find((item) => item._id === filmid);

  useEffect(() => {
    // write fetch request for single page data
    setFilm(theData);

    //console.log(theData)
  }, []);

  //console.log(film)

  return (
    <>
      <Film film={film} />
    </>
  );
};

export default SinglePage;
