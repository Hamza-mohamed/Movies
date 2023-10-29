import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MovieCard = ({movieData }) => {
  // console.log(movieData);
  return (
    <>
      <div className="card h-100  p-1 mx-1">
        <div className="image-fluid">
          
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            className="card-img-top w-50"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{movieData.title}</h5>
        <h3>  {movieData.original_language}</h3>
          <p className="card-text">{movieData?.overview}</p>
          <Link to={`/movieDetail/${movieData.id}`}>movie details</Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
