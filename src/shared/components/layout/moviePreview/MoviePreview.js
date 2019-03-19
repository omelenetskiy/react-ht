import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {
  actionMovieFetch,
  actionMovieFetchIfNeeded
} from '../../../store/actions/movie';
import { actionMoviesMatchByGenre } from '../../../store/actions/movies';
import { withRouter } from 'react-router';
import { getMovieState, getMoviesState } from '../../../store/selectors';

import MovieList from '../movieList/MovieList';

const StyledMovie = styled.article`
  color: #fff;
  background: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;

  .card-title {
    color: ${props => props.theme.dangerColor};
  }

  .card-img {
    width: 250px;
    height: 100%;
  }
`;

class MoviePreview extends Component {
  static fetchData({ store, params }) {
    store.dispatch(actionMovieFetch({ id: parseInt(params.id) }));
  }

  fetchIfNeeded() {
    this.props.dispatch(
      actionMovieFetchIfNeeded({ id: parseInt(this.props.match.params.id) })
    );
  }

  componentDidMount() {
    this.fetchIfNeeded();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchIfNeeded();
    }
  }

  render() {
    const { moviesData } = this.props;
    const { movies } = moviesData;
    const { movie } = this.props.movieData;
    const date = Date.parse(movie.release_date);
    const parsedDate = new Date(date).getFullYear();
    return (
      <Fragment>
        <Helmet>
          <title>{`${movie.title}`}</title>
        </Helmet>

        {this.props.movieData.loading ? (
          'Loading...'
        ) : (
          <StyledMovie>
            <img
              src={movie.poster_path}
              className="card-img"
              alt={movie.title}
            />
            <div className="card-body">
              <h1 className="card-title">
                {`${movie.title} `}
                <span>{movie.vote_average}</span>
              </h1>
              <p className="card-text">
                <small>{movie.tagline}</small>
              </p>
              <p className="card-text">
                <small>{`${parsedDate}`}</small>{' '}
                <small>{`${movie.runtime} min`}</small>
              </p>
              <p className="card-text">{movie.overview}</p>
            </div>
          </StyledMovie>
        )}
        <section className="home">
          <MovieList movies={movies} />
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieData: getMovieState(state),
    moviesData: getMoviesState(state)
  };
};

export default withRouter(connect(mapStateToProps)(MoviePreview));
