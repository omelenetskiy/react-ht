// Imports
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Home from './layout/home/Home';
import MoviePage from './layout/moviePage/MoviePage';
import NotFound from './common/notFound/NotFound';
import ErrorBoundary from './common/errorBoundary/ErrorBoundary';

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
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </ErrorBoundary>

      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default hot(App);
