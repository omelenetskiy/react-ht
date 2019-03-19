import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMovieCard = styled.div`
  max-width: ${props => props.theme.cardMaxWidth};
  margin: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  img {
    width: 100%;
    height: auto;
  }

  .card-body {
    .card-title {
      margin: 0;
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }
  }

  .card-footer {
    max-width: 100%;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;

const MovieCard = ({ movie, parsedDate }) => (
  <Link to={`/movie/${movie.id}`} key={movie.id}>
    <StyledMovieCard>
      <img src={movie.poster_path} className="card-img" alt={movie.title} />
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
    </StyledMovieCard>
  </Link>
);

export default MovieCard;
