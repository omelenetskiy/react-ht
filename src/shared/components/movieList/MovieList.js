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
  background: rgba(255, 255, 255, 0.7);
`;

type Props = {
  movies: Array<{
    release_date: string,
    id: string,
  }>,
};

const MovieList = ({ movies }: Props) => (
  <section className="home">
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
        <p>No films found</p>
      )}
    </StyledMovieCardWrapper>
  </section>
);

const mapStateToProps = (state) => ({
  movies: getMoviesState(state),
});

export default connect(mapStateToProps)(MovieList);
