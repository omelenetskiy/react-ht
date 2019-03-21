import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actionMoviesFetch } from '../../../store/actions/movies';
import { getMoviesState } from '../../../store/selectors';
import qs from 'query-string';

import { searchFormTitle } from '../../../../config/moviesApp';

import Title from '../searchForm/title/Title';
import Input from '../searchForm/input/Input';
import Filter from '../filter/Filter';
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
    this.props.moviesFetch(inputValue);
    history.replace(`/search/${searchString}`);
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
        <Filter />
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
  )(SearchForm)
);
