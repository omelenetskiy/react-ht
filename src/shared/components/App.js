// Imports
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import Header from "./layout/header/Header";
import MoviePreview from "./layout/moviePreview/MoviePreview";
import SearchInput from "./common/search/SearchInput";
import Filter from "./common/filter/Filter";
import Footer from "./layout/footer/Footer";
import Home from "./layout/home/Home";
import NotFound from "./common/notFound/NotFound";
import Test from "./Test";

const App = props => (
  <Fragment>
    <Test />
    <Header>
      <Switch>
        <Route exact path="/" component={SearchInput} />
        <Route path="/movie/:id" component={MoviePreview} />
      </Switch>
    </Header>
    <Filter />
    <section className="main">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={Home} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </section>
    <Footer />
  </Fragment>
);

export default hot(App);
