import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionMovieFetch } from '../../store/actions/movie';

import StyledMovieCard from '../../styled/card';

const StyledLink = styled(Link)`
  border: 1px solid ${(props) => props.theme.stylishColorLight};
  background-color: #fff;
  border-radius: 3px;
  margin: 5px;
  max-width: ${(props) => props.theme.cardMaxWidth};
`;

type Props = {
  parsedDate: string,
  movie: {
    id: string,
    poster_path: string,
    title: string,
    genres: Array<{
      [key]: string,
    }>,
  },
};

class MovieCard extends Component<Props> {
  fetchMovie = async (id) => {
    const { actionMovie } = this.props;
    await actionMovie(id);
  };

  render() {
    const { movie, parsedDate } = this.props;
    return (
      <StyledLink
        to={`/movie/${movie.id}`}
        key={movie.id}
        onClick={() => this.fetchMovie(movie.id)}
      >
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
  }
}

const matDispatchToProps = (dispatch) => ({
  actionMovie: (value) => dispatch(actionMovieFetch(value)),
});

export default connect(
  null,
  matDispatchToProps
)(MovieCard);
