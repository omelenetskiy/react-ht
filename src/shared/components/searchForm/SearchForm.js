import React, { Fragment, Component } from 'react';
import qs from 'query-string';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actionMoviesFetchByQueryString } from '../../store/actions/movies';
import { getMoviesStateData } from '../../store/selectors';
import { searchFormTitle } from '../../../config/moviesApp';

import SortFilter from '../sortFilter/SortFilter';
import SearchFilter from '../searchFilter/SearchFilter';
import Title from './title/Title';
import Input from './input/Input';

const StyledSearchForm = styled.form`
  margin-top: 40px;
`;

class SearchForm extends Component {
  static async fetchData({ store, params }) {
    if (params.query) {
      const parsed = qs.parse(params.query);
      const stringified = qs.stringify(parsed);

      await store.dispatch(actionMoviesFetchByQueryString(stringified));
    }
  }

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
    history.push(`/search/${searchString}`);
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { movies } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Movies</title>
        </Helmet>
        <StyledSearchForm>
          <Title>{searchFormTitle}</Title>
          <Input
            placeholder="Find your movie..."
            onChange={this.handleChange}
          />
          <SearchFilter handleSearch={this.handleSearch} />
          {movies.movies.length ? <SortFilter /> : null}
        </StyledSearchForm>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: getMoviesStateData(state),
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
