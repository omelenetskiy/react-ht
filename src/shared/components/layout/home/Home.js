import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import {
  actionMoviesFetch,
  actionMoviesFetchIfNeeded
} from "../../../store/actions/movies";

import MovieCard from "../movieCard/MovieCard";

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
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    parsedDate={parsedDate}
                  />
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
