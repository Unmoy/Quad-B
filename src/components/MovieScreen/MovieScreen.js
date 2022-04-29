import { useEffect, useState } from "react";
import "./MovieScreen.css";
import { useParams } from "react-router";
import BookingForm from "../BookingForm/BookingForm";
const MovieScreen = () => {
  const { id } = useParams([]);
  const [movieData, setMovieData] = useState({});
  const [movieImage, setMovieImage] = useState("");
  console.log(movieData);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        setMovieImage(data.image.original);
      });
  }, [id]);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="container movie_detail_section ">
      <div className="movie_details_card d-flex justify-content-center">
        <div className="movie_card_image">
          <img src={movieImage} alt="" />
        </div>
        <div className="movie_description">
          <h1 className="movie_title">{movieData.name}</h1>
          <p className="movie_summary">{movieData.summary}</p>
          <div className="movie_points">
            <p className="movie_language">Language: {movieData.language}</p>
            <p className="movie_status">Premiered: {movieData.premiered}</p>
          </div>

          <div className="bottom_info">
            <button onClick={openModal}>Book Ticket</button>
            <BookingForm
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              name={movieData.name}
              runtime={movieData.runtime}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieScreen;
