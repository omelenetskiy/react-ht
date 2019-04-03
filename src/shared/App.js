// Imports
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Loadable from 'react-loadable';

import { ThemeProvider } from 'styled-components';
import AppHeader from './components/header/Header';
import Footer from './components/footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

import NotFound from './components/notFound/NotFound';
import Loading from './components/loading/Loading';

import theme from './styled/theme';
import GlobalStyle from './styled/globalStyle';

const Home = Loadable({
  loader: () => import('./components/home/Home'),
  loading: Loading,
});

const MoviePreview = Loadable({
  loader: () => import('./components/moviePreview/MoviePreview'),
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
