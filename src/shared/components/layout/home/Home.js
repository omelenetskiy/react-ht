import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import {
  actionMoviesFetch,
  actionMoviesFetchIfNeeded
} from "../../../store/actions/movies";
import { getMoviesState } from "../../../store/selectors";

import SearchInput from "../../common/search/SearchInput";
import MovieList from "../movieList/MovieList";

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
        <SearchInput />
        <section className="home">
          <MovieList movies={movies} />
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesData: getMoviesState(state)
  };
};

export default connect(mapStateToProps)(Home);
