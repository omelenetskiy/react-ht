import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from './components/notFound/NotFound';
import loading from './components/loading/Loading';

const SearchForm = Loadable({
  loader: () => import('./components/searchForm/SearchForm'),
  loading,
});

const MoviePreview = Loadable({
  loader: () => import('./components/moviePreview/MoviePreview'),
  loading,
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SearchForm} />
    <Route path="/search/:query" component={SearchForm} />
    <Route path="/movie/:id" component={MoviePreview} />
    <Route exact path="/404" component={NotFound} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
