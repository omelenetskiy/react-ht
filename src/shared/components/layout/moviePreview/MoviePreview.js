import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import {
  actionMovieFetch,
  actionMovieFetchIfNeeded
} from "../../../store/actions/movie";

class Movie extends Component {
  static fetchData({ store, params }) {
    return store.dispatch(actionMovieFetch({ id: parseInt(params.id) }));
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
    const { movie } = this.props.movieData;
    const date = Date.parse(movie.release_date);
    const parsedDate = new Date(date).getFullYear();
    return (
      <Fragment>
        <Helmet>
          <title>{`${movie.title}`}</title>
        </Helmet>
        {this.props.movieData.loading ? (
          "Loading..."
        ) : (
          <article className="movie">
            <div className="card">
              <img src={movie.poster_path} className="card-img" alt="..." />
              <div className="card-body">
                <h1 className="card-title">
                  {`${movie.title} `}
                  <span className="badge badge-pill badge-danger">
                    {movie.vote_average}
                  </span>
                </h1>
                <p className="card-text">
                  <small>{movie.tagline}</small>
                </p>
                <p className="card-text">
                  <small>{`${parsedDate}`}</small>{" "}
                  <small>{`${movie.runtime} min`}</small>
                </p>
                <p className="card-text">{movie.overview}</p>
              </div>
            </div>
          </article>
        )}
      </Fragment>
    );
  }
}

function moviesState(state) {
  return {
    movieData: state.movie
  };
}

export default connect(moviesState)(Movie);
