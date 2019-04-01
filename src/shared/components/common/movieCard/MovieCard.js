import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import StyledMovieCard from '../../styled/card';

const StyledLink = styled(Link)`
  border: 1px solid ${props => props.theme.stylishColorLight};
  background-color: #fff;
  border-radius: 3px;
  margin: 5px;
  max-width: ${props => props.theme.cardMaxWidth};
`;

type Props = {
  parsedDate: string,
  movie: {
    id: string,
    poster_path: string,
    title: string,
    genres: Array<{
      [key]: string
    }>
  }
};

const MovieCard = ({ movie, parsedDate }: Props) => (
  <StyledLink to={`/movie/${movie.id}`} key={movie.id}>
    <StyledMovieCard>
      <img src={movie.poster_path} className="card-img" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <span className="badge">{parsedDate}</span>
      </div>
      <div className="card-footer">{movie.genres.join(' & ')}</div>
    </StyledMovieCard>
  </StyledLink>
);

export default MovieCard;
