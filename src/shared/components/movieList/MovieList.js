import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMoviesState } from '../../store/selectors';

import MovieCard from '../movieCard/MovieCard';

const StyledMovieCardWrapper = styled.div`
  display: flex;
  padding: 15px 0;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  flex-grow: 0.9;

  .not-found {
    font-size: 45px;
    font-weight: bold;
  }
`;

type Props = {
  movies: Array<{
    release_date: string,
    id: string,
  }>,
};

const MovieList = ({ movies }: Props) => (
  <StyledMovieCardWrapper>
    {movies.length ? (
      movies.map((movie) => {
        const date = Date.parse(movie.release_date);
        const parsedDate = new Date(date).getFullYear();
        return (
          <MovieCard key={movie.id} movie={movie} parsedDate={parsedDate} />
        );
      })
    ) : (
      <p className="not-found">No movies found :(</p>
    )}
  </StyledMovieCardWrapper>
);

const mapStateToProps = (state) => ({
  movies: getMoviesState(state),
});

export default connect(mapStateToProps)(MovieList);
