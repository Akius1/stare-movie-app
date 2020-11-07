import React, { useState, useEffect } from "react";
import PageContainer from "./PageContainer";
import filmData from "./filmData";
const LandingPage = () => {
  const [allFilms, setAllFilms] = useState([]);

  // const url =
  //   "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setAllFilms(data));
  // }, []);

  // useEffect(() => {
  //   //console.log(allFilms);
  // }, [allFilms]);

  useEffect(() => {
    setAllFilms(filmData);
  }, []);

  return (
    <>
      <PageContainer allFilms={allFilms} setAllFilms={setAllFilms} />
    </>
  );
};

export default LandingPage;
