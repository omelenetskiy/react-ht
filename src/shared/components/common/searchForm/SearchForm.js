import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actionMoviesFetchByQueryString } from '../../../store/actions/movies';
import { getMoviesState } from '../../../store/selectors';
import qs from 'query-string';

import { searchFormTitle } from '../../../../config/moviesApp';

import Title from '../searchForm/title/Title';
import Input from '../searchForm/input/Input';
import SortFilter from '../sortFilter/SortFilter';
import SearchFilter from '../searchFilter/SearchFilter';

const StyledSearchForm = styled.form`
  margin-top: 40px;
`;

class SearchForm extends Component {
  state = {
    inputValue: ''
  };

  handleSearch = e => {
    e.preventDefault();
    const { history } = this.props;
    const { inputValue } = this.state;
    const { searchBy } = this.props.movies;
    const searchQuery = { searchBy, search: inputValue };
    const searchString = qs.stringify(searchQuery);
    this.props.moviesFetch(searchString);
    console.log(searchString);
    history.push({
      pathname: '/search',
      search: searchString
    });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      inputValue: value
    });
  };

  render() {
    return (
      <StyledSearchForm>
        <Title>{searchFormTitle}</Title>
        <Input placeholder="Find your movie..." onChange={this.handleChange} />
        <SearchFilter handleSearch={this.handleSearch} />
        <SortFilter />
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
  moviesFetch: value => dispatch(actionMoviesFetchByQueryString(value))
});

export default withRouter(
  connect(
    mapStateToProps,
    matDispatchToProps
  )(SearchForm)
);
