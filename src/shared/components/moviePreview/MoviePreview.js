import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actionMovieFetch } from '../../store/actions/movie';
import { getMovieState, getMoviesState } from '../../store/selectors';

import MovieList from '../movieList/MovieList';
import MovieCard from './movieCard/MovieCard';

export class MoviePreview extends Component {
  static fetchData({ store, params }) {
    store.dispatch(actionMovieFetch({ id: parseInt(params.id, 10) }));
  }

  componentDidMount() {
    this.fetchIfNeeded();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      this.fetchIfNeeded();
    }
  }

  fetchIfNeeded() {
    const { dispatch, match } = this.props;
    dispatch(actionMovieFetch({ id: parseInt(match.params.id, 10) }));
  }

  render() {
    const { moviesData, movieData } = this.props;
    const { movies } = moviesData;
    const { movie } = movieData;
    const date = Date.parse(movie.release_date);
    const parsedDate = new Date(date).getFullYear();
    return (
      <Fragment>
        <Helmet>
          <title>{`${movie.title}`}</title>
        </Helmet>

        <MovieCard movie={movie} parsedDate={parsedDate} />

        <section className="home">
          <MovieList movies={movies} />
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movieData: getMovieState(state),
  moviesData: getMoviesState(state),
});

export default withRouter(connect(mapStateToProps)(MoviePreview));
