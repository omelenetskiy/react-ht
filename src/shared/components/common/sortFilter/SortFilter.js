import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import qs from 'query-string';
import { getMoviesState } from '../../../store/selectors';
import {
  actionSortByChange,
  actionMoviesFetchByQueryString,
} from '../../../store/actions/movies';

import { sortByButtons } from '../../../../config/buttonGroups';

import ButtonGroup from '../buttonGroup/ButtonGroup';

const StyledFilter = styled.section`
  width: 100%;
  background-color: rgb(245, 245, 245);
  padding: 10px 20px;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;
`;

class Filter extends PureComponent {
  toggleSortBy = (e) => {
    const { location, changeSortBy, moviesFetch, movies } = this.props;
    changeSortBy(e.target.value);
    const parsed = qs.parse(location.search);
    const query = { ...parsed, sortBy: movies.sortBy };
    const searchString = qs.stringify(query);
    moviesFetch(searchString);
  };

  render() {
    const {
      movies: { movies },
    } = this.props;

    return (
      <StyledFilter>
        <Fragment>
          <span>{`${movies && movies.length} movies found`}</span>
          <ButtonGroup
            controls={sortByButtons}
            toggleSearchBy={this.toggleSortBy}
            type="sort"
          />
        </Fragment>
      </StyledFilter>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: getMoviesState(state),
});

const matDispatchToProps = (dispatch) => ({
  changeSortBy: (value) => dispatch(actionSortByChange(value)),
  moviesFetch: (value) => dispatch(actionMoviesFetchByQueryString(value)),
});

export default withRouter(
  connect(
    mapStateToProps,
    matDispatchToProps
  )(Filter)
);
