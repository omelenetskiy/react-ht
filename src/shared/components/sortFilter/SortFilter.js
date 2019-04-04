import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import qs from 'query-string';
import { getMoviesState, getMoviesStateData } from '../../store/selectors';
import { actionSortByChange } from '../../store/actions/movies';

import { sortByButtons } from '../../../config/buttonGroups';

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

  span {
    white-space: nowrap;

    &:first-child {
      font-weight: bold;
    }
  }

  @media screen and (max-width: 684px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

class Filter extends Component {
  toggleSortBy = async (e) => {
    const { changeSortBy, match } = this.props;
    const queryString = match.params.query;
    const parsed = qs.parse(queryString);
    const query = { ...parsed, sortBy: e.target.value };
    const searchString = qs.stringify(query);

    await changeSortBy(e.target.value, searchString);
  };

  render() {
    const { movies } = this.props;

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
  moviesData: getMoviesStateData(state),
});

const matDispatchToProps = (dispatch) => ({
  changeSortBy: (value, query) => dispatch(actionSortByChange(value, query)),
});

export default withRouter(
  connect(
    mapStateToProps,
    matDispatchToProps
  )(Filter)
);
