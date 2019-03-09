import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/layout/main';
import NotFound from './components/common/notFound';
import ItemView from './containers/list_item_view';

const App = () => (
  <Fragment>
    <Header />
    <section className="main">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/view/:name" component={ItemView} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </section>
    <Footer />
  </Fragment>
);

export default App;
