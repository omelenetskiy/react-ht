import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMoviesState } from '../../../store/selectors';
import { actionSortByChange } from '../../../store/actions/movies';

const StyledFilter = styled.section`
  width: 100%;
  background-color: ${props => props.theme.stylishColor};
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
  state = {
    buttons: [
      {
        title: 'release date',
        value: 'release_date',
        name: 'filter',
        checked: true
      },
      {
        title: 'rating',
        value: 'vote_average',
        name: 'filter',
        checked: false
      }
    ]
  };

  sortBy = e => {
    const { changeSortBy } = this.props;
    changeSortBy(e.target.value);
  };

  render() {
    const {
      movies: { movies }
    } = this.props;

    return (
      <StyledFilter>
        <Fragment>
          <span>{`${movies && movies.length} movies found`}</span>
          <div>
            <span>Sort by: </span>{' '}
            <div className="btn-group">
              <label>
                <input
                  type="radio"
                  name="options"
                  value="release_date"
                  onChange={this.sortBy}
                />{' '}
                release date
              </label>
              <label>
                <input
                  type="radio"
                  name="options"
                  value="vote_average"
                  defaultChecked
                  onChange={this.sortBy}
                />
                rating
              </label>
            </div>
          </div>
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
  changeSortBy: value => dispatch(actionSortByChange(value))
});

export default connect(
  mapStateToProps,
  matDispatchToProps
)(Filter);
