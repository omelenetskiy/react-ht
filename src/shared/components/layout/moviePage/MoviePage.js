import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import {
  actionMoviesFetch,
  actionMoviesFetchIfNeeded
} from "../../../store/actions/movies";
import { withRouter } from "react-router";

import MoviePreview from "../moviePreview/MoviePreview";
import MovieList from "../movieList/MovieList";

class MoviePage extends Component {
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
          <title>MoviePreview</title>
        </Helmet>
        <MoviePreview />
        <section className="home">
          <MovieList movies={movies} />
        </section>
      </Fragment>
    );
  }
}

function moviesState(state) {
  return {
    moviesData: state.movies
  };
}

export default withRouter(connect(moviesState)(MoviePage));
