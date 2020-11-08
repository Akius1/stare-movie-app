import "./Home.css";
// import { Link } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PageContainer = ({ allFilms }) => {
  const [data, setData] = useState("");
  const [ratings, setRating] = useState([]);

  useEffect(async () => {
    const url = "http://localhost:3000/apiv1/films";
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
    });
    let userData = await response
      .json()
      .then((val) => {
        return val;
      })
      .then((user1) => {
        setData(user1);
      });

    // const url1 = "http://localhost:3000/apiv1/";
    // const response = await fetch(url1, {
    //   method: "GET",
    //   redirect: "follow",
    // });
    // let filmRating = await response.json().then((rating) => {
    //   return rating;
    // }).then((rating)=>{
    //   setRating(rating)
    // });
  }, []);

  // return (
  //   <div>
  //     {data && data.map( (da, i) => (
  //       <div>{da.name}</div>
  //     ))}
  //   </div>
  // )

  return (
    <>
      <Header />

      <div className="main-area">
        <div className="grid-wrapper">
          {data &&
            data.map((ten, i) => {
              console.log(ten);
              return (
                <Display
                  key={i}
                  name={ten.name}
                  description={ten.description}
                  id={ten.id}
                  ticket={ten.ticket_price}
                  image={ten.image_link}
                  ticket_id={allFilms[i].photo}
                />
              );
            })}
        </div>
      </div>

      <div className="footer-area"></div>
    </>
  );
};

function Display({ name, description, id, ticket, image, ticket_id }) {
  console.log(name);
  return (
    <>
      <div className="PageContainer-item" key={id}>
        <div className="pix-box">
          <Link to={`/films/${id}`}>
            <img className="movie-poster" src={image} alt="movie poster" />
          </Link>
        </div>
        <Link className="title-txt" to={`/films/${id}`}>
          <div>
            <p>{name}</p>
          </div>
        </Link>
        <div className="title-txt">
          <p>Rating: {description}</p>
        </div>
        <div className="title-txt">
          <p>Ticket Price: {ticket}</p>
        </div>
      </div>
    </>
  );
}

export default PageContainer;
