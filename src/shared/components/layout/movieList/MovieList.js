import React from "react";

import MovieCard from "../movieCard/MovieCard";

const MovieList = ({ movies }) => (
  <div className="card-wrapper">
    {movies && movies.length ? (
      movies.map(movie => {
        const date = Date.parse(movie.release_date);
        const parsedDate = new Date(date).getFullYear();
        return (
          <MovieCard key={movie.id} movie={movie} parsedDate={parsedDate} />
        );
      })
    ) : (
      <p>No films found</p>
    )}
  </div>
);

export default MovieList;
