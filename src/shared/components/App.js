// Imports
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Loadable from 'react-loadable';

import { ThemeProvider } from 'styled-components';
import AppHeader from './layout/header/Header';
import Footer from './layout/footer/Footer';
import ErrorBoundary from './common/errorBoundary/ErrorBoundary';

// import Home from './layout/home/Home';
// import MoviePreview from './common/moviePreview/MoviePreview';
import NotFound from './common/notFound/NotFound';
import Loading from './common/loading/Loading';

import theme from './styled/theme';
import GlobalStyle from './styled/globalStyle';

const Home = Loadable({
  loader: () => import('./layout/home/Home'),
  loading: Loading,
});

const MoviePreview = Loadable({
  loader: () => import('./common/moviePreview/MoviePreview'),
  loading: Loading,
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <AppHeader />

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
