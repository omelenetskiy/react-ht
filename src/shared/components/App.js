// Imports
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Filter from "./common/filter/Filter";
import Home from "./layout/home/Home";
import MoviePage from "./layout/moviePage/MoviePage";
import NotFound from "./common/notFound/NotFound";
import ErrorBoundary from "./common/errorBoundary/ErrorBoundary";
import Test from "./Test";

const App = () => (
  <Fragment>
    <Test />
    <Header />

    <Filter />
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={MoviePage} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </ErrorBoundary>

    <Footer />
  </Fragment>
);

export default hot(App);
