import React from 'react';
import styled from 'styled-components';

import MovieCard from '../movieCard/MovieCard';

const StyledMovieCardWrapper = styled.div`
  display: flex;
  padding: 15px 0;
  flex-flow: row wrap;
  justify-content: center;
  background: #fff;
`;

const MovieList = ({ movies }) => (
  <StyledMovieCardWrapper>
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
  </StyledMovieCardWrapper>
);

export default MovieList;
