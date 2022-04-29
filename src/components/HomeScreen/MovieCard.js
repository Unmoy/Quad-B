import React from "react";
import { Link } from "react-router-dom";
import "./HomeScreen.css";

const MovieCard = ({ movie }) => {
  // console.log(movie);
  return (
    <div className="col-md-3">
      <div className="wrapper">
        <div className="movie_card">
          <img src={movie.show.image.original} alt="" />
          <div className="descriptions">
            <h1>{movie.show.name}</h1>
            <p>
              Premiered: <span>{movie.show.premiered}</span>
            </p>
            <p>
              Average Rating: <span> {movie.show.rating.average}/10 </span>
            </p>
            <Link to={`moviescreen/${movie.show.id}`}>
              <button>Play</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
