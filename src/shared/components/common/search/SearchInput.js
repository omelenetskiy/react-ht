import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actionMoviesFetch } from '../../../store/actions/movies';
import { getMoviesState } from '../../../store/selectors';

import BtnGroup from '../btnGroup/BtnGroup';
import Button from '../button/Button';

const StyledSearchForm = styled.form`
  color: ${props => props.theme.dangerColor};

  .search-control {
    width: 100%;
    padding: 15px 0px;
    background-color: black;
    border: none;
    border-bottom: 5px solid ${props => props.theme.dangerColor};
    margin: 10px 0px;
    color: #fff;

    &:focus {
      outline: 2px solid ${props => props.theme.dangerColor};
    }
  }

  .action-wrapper {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
  }
`;

class SearchInput extends Component {
  searchInputRef = React.createRef();

  hangleSearch = e => {
    e.preventDefault();
    // const { history } = this.props;
    // history.push(
    //   `movies?search=${this.searchInputRef.current.value}&searchBy=title`
    // );

    this.props.moviesFetch(this.searchInputRef.current.value);
  };

  getInputValue = () => {
    return this.searchInputRef.current.value;
  };

  render() {
    return (
      <StyledSearchForm>
        <div className="form-group">
          <h2>FIND YOUR MOVIE</h2>
          <input
            type="text"
            className="search-control"
            placeholder="Find your movie..."
            ref={this.searchInputRef}
          />
        </div>
        <div className="action-wrapper">
          <BtnGroup />
          <Button onClick={this.hangleSearch}>Search</Button>
        </div>
      </StyledSearchForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: getMoviesState(state)
  };
};

const matDispatchToProps = dispatch => ({
  moviesFetch: value => dispatch(actionMoviesFetch(value))
});

export default withRouter(
  connect(
    mapStateToProps,
    matDispatchToProps
  )(SearchInput)
);
