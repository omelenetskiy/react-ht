import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SearchForm from './components/searchForm/SearchForm';
import MoviePreview from './components/moviePreview/MoviePreview';
import NotFound from './components/notFound/NotFound';

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
