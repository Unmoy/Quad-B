import { useEffect, useState } from "react";
import "./HomeScreen.css";
import MovieCard from "./MovieCard";

const HomeScreen = () => {
  const [moviesList, setMovisList] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setMovisList(data));
  }, []);
  return (
    <div className="home_screen">
      <h1 className="text-center">All movies</h1>
      <div className="container d-flex justify-content-center">
        <div className="row g-2">
          {moviesList.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
