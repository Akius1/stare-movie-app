import "./Home.css";
// import { Link } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";

const PageContainer = ({ allFilms }) => {
  const display = allFilms.map((item, index) => {
    return (
      <div className="PageContainer-item" key={item._id}>
        <div className="pix-box">
          <Link to={`/films/${item._id}`}>
            <img
              className="movie-poster"
              src={`./Images/${item.Photo}`}
              alt="movie poster"
            />
          </Link>
        </div>
        <Link className="title-txt" to={`/films/${item._id}`}>
          <div>
            <p>{item.name}</p>
          </div>
        </Link>
        <div className="title-txt">
          <p>Rating: {item.rating}</p>
        </div>
        <div className="title-txt">
          <p>Ticket Price: {item.ticketPrice}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />

      <div className="main-area">
        <div className="grid-wrapper">{display}</div>
      </div>

      <div className="footer-area"></div>
    </>
  );
};

export default PageContainer;
