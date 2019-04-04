import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actionMovieFetch } from '../../store/actions/movie';
import { actionMoviesMatchByGenres } from '../../store/actions/movies';
import { getMovieState } from '../../store/selectors';

import StyledMovie from '../../styled/moviePreview';

class MoviePreview extends Component {
  static async fetchData({ store, params }) {
    await store.dispatch(actionMovieFetch(params.id));
    await store.dispatch(actionMoviesMatchByGenres());
  }

  componentDidUpdate(prevProps) {
    const { dispatch, match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      dispatch(actionMoviesMatchByGenres());
    }
  }

  render() {
    const { movie } = this.props;
    const date = Date.parse(movie.release_date);
    const parsedDate = new Date(date).getFullYear();

    return (
      <Fragment>
        <Helmet>
          <title>{`${movie.title}`}</title>
        </Helmet>
        <StyledMovie>
          <img src={movie.poster_path} className="card-img" alt={movie.title} />
          <div className="card-body">
            <div className="card-title">
              <h1>{movie.title}</h1>
              {movie.vote_average && <span>{movie.vote_average}</span>}
            </div>
            <div className="card-tagline">
              {movie.tagline && <small>{movie.tagline}</small>}
            </div>
            <p className="card-time">
              <b>{`${parsedDate}`}</b>
              {movie.runtime && <b>{`${movie.runtime} min`}</b>}
            </p>
            <p className="card-text">{movie.overview}</p>
          </div>
        </StyledMovie>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: getMovieState(state),
});

export default withRouter(connect(mapStateToProps)(MoviePreview));
