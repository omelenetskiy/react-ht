import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  actionMovieFetch,
  actionMovieFetchIfNeeded
} from '../../../store/actions/movie';
import { getMovieState, getMoviesState } from '../../../store/selectors';

import MovieList from '../movieList/MovieList';
import MovieCard from './movieCard/MovieCard';

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

        <MovieCard movie={movie} parsedDate={parsedDate} />

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
