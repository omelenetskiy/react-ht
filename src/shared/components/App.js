// Imports
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import ErrorBoundary from './common/errorBoundary/ErrorBoundary';

import Home from './layout/home/Home';
import MoviePreview from './common/moviePreview/MoviePreview';
import NotFound from './common/notFound/NotFound';

import { ThemeProvider } from 'styled-components';
import { theme } from './styled/theme';
import { GlobalStyle } from './styled/globalStyle';

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Header />

      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Home} />
          <Route path="/movie/:id" component={MoviePreview} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>

      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default hot(App);
