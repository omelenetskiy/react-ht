import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getMoviesState } from '../../../store/selectors';
import {
  actionSortByChange,
  actionMoviesFetchByQueryString
} from '../../../store/actions/movies';
import qs from 'query-string';

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

  .btn-group {
    display: inline-flex;
  }
`;

class Filter extends Component {
  toggleSortBy = e => {
    const { location, changeSortBy } = this.props;
    changeSortBy(e.target.value);
    console.log(location);
    const parsed = qs.parse(location.search);
    console.log(parsed);
  };

  render() {
    const {
      movies: { movies }
    } = this.props;

    return (
      <StyledFilter>
        <Fragment>
          <span>{`${movies && movies.length} movies found`}</span>
          <ButtonGroup
            controls={sortByButtons}
            toggleSearchBy={this.toggleSortBy}
          />
        </Fragment>
      </StyledFilter>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: getMoviesState(state)
  };
};

const matDispatchToProps = dispatch => ({
  changeSortBy: value => dispatch(actionSortByChange(value)),
  moviesFetch: value => dispatch(actionMoviesFetchByQueryString(value))
});

export default withRouter(
  connect(
    mapStateToProps,
    matDispatchToProps
  )(Filter)
);
