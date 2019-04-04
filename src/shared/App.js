import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';

import theme from './styled/theme';
import GlobalStyle from './styled/globalStyle';

import MoviesList from './components/movieList/MovieList';
import AppHeader from './components/header/Header';
import AppFooter from './components/footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Routes from './Routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <ErrorBoundary>
        <AppHeader />
        <Routes />
        <Route path="/(search||movie)/" component={MoviesList} />
        <AppFooter />
      </ErrorBoundary>
    </Fragment>
  </ThemeProvider>
);

export default hot(App);
