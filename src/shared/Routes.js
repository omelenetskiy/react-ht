import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchForm from './components/searchForm/SearchForm';
import MoviePreview from './components/moviePreview/MoviePreview';
import NotFound from './components/notFound/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SearchForm} />
    <Route path="/search/:query" component={SearchForm} />
    <Route path="/movie/:id" component={MoviePreview} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
