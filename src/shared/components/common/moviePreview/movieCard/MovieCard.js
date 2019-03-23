import React from "react";

import StyledMovie from "../../../styled/moviePreview";

const MovieCard = ({ movie, parsedDate }) => {
  return movie ? (
    <StyledMovie>
      <img src={movie.poster_path} className="card-img" alt={movie.title} />
      <div className="card-body">
        <div className="card-title">
          <h1>{movie.title}</h1>
          <span>{movie.vote_average}</span>
        </div>
        <div className="card-tagline">
          <small>{movie.tagline}</small>
        </div>
        <p className="card-time">
          <b>{`${parsedDate}`}</b>
          <b>{`${movie.runtime} min`}</b>
        </p>
        <p className="card-text">{movie.overview}</p>
      </div>
    </StyledMovie>
  ) : (
    <div>Loading...</div>
  );
};

export default MovieCard;
