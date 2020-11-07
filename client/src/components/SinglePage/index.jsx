import React from "react";
import Film from "./Film";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { filmid } = useParams();
  console.log(filmid);
  return (
    <>
      hello
      <Film />
    </>
  );
};

export default SinglePage;
