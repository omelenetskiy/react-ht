import React, { Component } from 'react';
import qs from 'query-string';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actionMoviesFetchByQueryString } from '../../../store/actions/movies';
import { getMoviesState } from '../../../store/selectors';
import { searchFormTitle } from '../../../../config/moviesApp';

import SortFilter from '../sortFilter/SortFilter';
import SearchFilter from '../searchFilter/SearchFilter';
import Title from './title/Title';
import Input from './input/Input';

const StyledSearchForm = styled.form`
  margin-top: 40px;
`;

class SearchForm extends Component {
  state = {
    inputValue: '',
  };

  handleSearch = (e) => {
    e.preventDefault();
    const { history, moviesFetch, movies } = this.props;
    const { inputValue } = this.state;
    const { searchBy } = movies;
    const searchQuery = { searchBy, search: inputValue };
    const searchString = qs.stringify(searchQuery);
    moviesFetch(searchString);
    history.push({
      pathname: '/search/',
      search: searchString,
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { movies } = this.props;
    const { movies: moviesList } = movies;
    return (
      <StyledSearchForm>
        <Title>{searchFormTitle}</Title>
        <Input placeholder="Find your movie..." onChange={this.handleChange} />
        <SearchFilter handleSearch={this.handleSearch} />
        {moviesList && moviesList.length && <SortFilter />}
      </StyledSearchForm>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: getMoviesState(state),
});

const matDispatchToProps = (dispatch) => ({
  moviesFetch: (value) => dispatch(actionMoviesFetchByQueryString(value)),
});

export default withRouter(
  connect(
    mapStateToProps,
    matDispatchToProps
  )(SearchForm)
);
