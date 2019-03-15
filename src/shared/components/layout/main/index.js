import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  actionMoviesFetch,
  actionMoviesFetchIfNeeded
} from '../../../store/actions/movies';

class Home extends Component {
  static fetchData({ store }) {
    return store.dispatch(actionMoviesFetch());
  }

  componentDidMount() {
    this.props.dispatch(actionMoviesFetchIfNeeded());
  }

  render() {
    const { moviesData } = this.props;
    const { movies } = moviesData;
    return (
      <Fragment>
        <Helmet>
          <title>Movies</title>
        </Helmet>
        <div className="home">
          <div className="card-wrapper">
            {movies ? (
              movies.map(movie => {
                const date = Date.parse(movie.release_date);
                const parsedDate = new Date(date).getFullYear();
                return (
                  <Link to={`/movie/${movie.id}`} key={movie.id}>
                    <div className="card">
                      <img
                        src={movie.poster_path}
                        className="card-img-top"
                        alt={movie.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <span className="title-text">{movie.title}</span>
                          <span className="badge badge-secondary">
                            {parsedDate}
                          </span>
                        </h5>
                      </div>
                      <div className="card-footer">
                        {movie.genres.map((genre, i) => (
                          <span key={genre}>
                            {movie.genres.length > 1 &&
                            i < movie.genres.length - 1
                              ? `${genre} &`
                              : genre}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p>No films found</p>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

function moviesState(state) {
  return {
    moviesData: state.movies
  };
}

export default connect(moviesState)(Home);
