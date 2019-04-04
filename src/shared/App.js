import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { getMoviesState } from './store/selectors';

import theme from './styled/theme';
import GlobalStyle from './styled/globalStyle';

import MoviesList from './components/movieList/MovieList';
import AppHeader from './components/header/Header';
import AppFooter from './components/footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import SearchForm from './components/searchForm/SearchForm';
import MoviePreview from './components/moviePreview/MoviePreview';
import NotFound from './components/notFound/NotFound';

const App = ({ moviesData }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <ErrorBoundary>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={SearchForm} />
          <Route path="/search/:query" component={SearchForm} />
          <Route path="/movie/:id" component={MoviePreview} />
          <Route component={NotFound} />
        </Switch>
        <MoviesList movies={moviesData.movies} />
        <AppFooter />
      </ErrorBoundary>
    </Fragment>
  </ThemeProvider>
);

const mapStateToProps = (state) => ({
  moviesData: getMoviesState(state),
});

export default hot(connect(mapStateToProps)(App));
