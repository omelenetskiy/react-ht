import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, parsedDate }) => (
  <Link to={`/movie/${movie.id}`} key={movie.id}>
    <div className="card">
      <img src={movie.poster_path} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">
          <span className="title-text">{movie.title}</span>
          <span className="badge badge-secondary">{parsedDate}</span>
        </h5>
      </div>
      <div className="card-footer">
        {movie.genres.map((genre, i) => (
          <span key={genre}>
            {movie.genres.length > 1 && i < movie.genres.length - 1
              ? `${genre} &`
              : genre}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

export default MovieCard;
