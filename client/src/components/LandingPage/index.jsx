import React, { useState } from "react";
import PageContainer from "./PageContainer";
import filmData from "./filmData";
const LandingPage = () => {
  const [allFilms, setAllFilms] = useState([
    "borat-subsequent-moviefilm-2020.jpg",
    "chintu-ka-birthday-2020.jpg",
    "city-of-salt-2020.jpg",
    "chintu-ka-birthday-2020.jpg",
    "dau-degeneratsiya-2020.jpg",
    "dave-chappelle-the-kennedy-center-mark-twain-prize-for-american-humor-2020.jpg",
    "dil-bechara-2020.jpg",
    "faith-based-2020.jpg",
    "im-thinking-of-ending-things-2020.jpg",
    "midnight-delight-2016.jpg",
    "still-here-2020.jpg",
    "the-boys-in-the-band-2020.jpg",
    "the-social-dilemma-2020.jpg",
    "tyler-perrys-madeas-farewell-play-2020.jpg",
  ]);

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

  return (
    <>
      <PageContainer image={allFilms} filmData={filmData} />
    </>
  );
};

export default LandingPage;
