import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import routes from '../routes';
import Layout from '../components/Layout';
import createStore, { initializeSession } from '../store';
import htmlTemplate from './htmlTemplate';

const app = express();
const port = 8000;

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/*', (req, res) => {
  const context = {};
  const store = createStore();

  store.dispatch(initializeSession());

  const dataRequirements = routes
    .filter(route => matchPath(req.url, route)) // filter matching paths
    .map(route => route.component) // map to components
    .filter(comp => comp.serverFetch) // check if components have data requirement
    .map(comp => store.dispatch(comp.serverFetch())); // dispatch data requirement

  Promise.all(dataRequirements).then(() => {
    const jsx = (
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <Layout />
        </StaticRouter>
      </Provider>
    );
    const reactDom = renderToString(jsx);
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDom, reduxState, helmetData));
  });
});

app.listen(port);
console.log(`Your server running at http://localhost:${port}`);
