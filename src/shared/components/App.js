// Imports
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
// App Imports
import routes from "../routes";
// import Layout from './common/Layout';
// import NotFound from './common/NotFound';

import Header from "./layout/header";
import Movie from "./layout/movie";
import Search from "./common/search";
import Filter from "./common/filter";
import Footer from "./layout/footer";
import Home from "./layout/main";
import NotFound from "./common/notFound";
import Test from "./Test";

const App = props => (
  // <Switch>
  //   {routes.map((route, index) => (
  //     // pass in the initialData from the server for this specific route
  //     <Route {...route} key={index} />
  //   ))}
  //   <Route component={NotFound} />
  // </Switch>
  <Fragment>
    <Test />
    <Header>
      <Switch>
        <Route path="/" component={Search} />
        <Route path="/movie/:id" component={Movie} />
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
