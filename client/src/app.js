import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/layout/header';
import Movie from './components/layout/movie';
import Search from './components/common/search';
import Filter from './components/common/filter';
import Footer from './components/layout/footer';
import Home from './components/layout/main';
import NotFound from './components/common/notFound';
import ItemView from './containers/list_item_view';

const App = () => (
  <Fragment>
    <Header>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/movie/:id" component={Movie} />
      </Switch>
    </Header>
    <Filter />
    <section className="main">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={Home} />
          <Route path="/view/:name" component={ItemView} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </section>
    <Footer />
  </Fragment>
);

export default App;
