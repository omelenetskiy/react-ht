import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import { getMoviesState } from '../../../store/selectors';

import MoviePreview from '../moviePreview/MoviePreview';
import MovieList from '../movieList/MovieList';
import { connect } from 'react-redux';

class MoviePage extends Component {
  render() {
    const { moviesData } = this.props;
    const { movies } = moviesData;
    return (
      <Fragment>
        <Helmet>
          <title>MoviePreview</title>
        </Helmet>
        <MoviePreview />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesData: getMoviesState(state)
  };
};

export default withRouter(connect(mapStateToProps)(MoviePage));
