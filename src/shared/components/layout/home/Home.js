import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import qs from 'query-string';
import { actionMoviesFetchByQueryString } from '../../../store/actions/movies';
import { getMoviesState } from '../../../store/selectors';

import SearchForm from '../../common/searchForm/SearchForm';
import MovieList from '../../common/movieList/MovieList';

class Home extends PureComponent {
  static fetchData({ store, params }) {
    if (params.query) {
      const parsed = qs.parse(params.query);
      const stringified = qs.stringify(parsed);
      return store.dispatch(actionMoviesFetchByQueryString(stringified));
    }
    return store.dispatch(actionMoviesFetchByQueryString());
  }

  componentDidMount() {
    // this.props.dispatch(actionMoviesFetchIfNeeded());
  }

  render() {
    const { moviesData } = this.props;
    const { movies } = moviesData;
    return (
      <Fragment>
        <Helmet>
          <title>Movies</title>
        </Helmet>
        <SearchForm />
        <section className="home">
          <MovieList movies={movies} />
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  moviesData: getMoviesState(state),
});

export default withRouter(connect(mapStateToProps)(Home));
