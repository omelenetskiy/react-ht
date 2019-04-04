import path from 'path';
import Express from 'express';
import React from 'react';
import thunk from 'redux-thunk';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { Server } from 'http';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import rootReducer from '../shared/store/reducers';

import routes from '../shared/constants/routes';
import App from '../shared/App';
import indexHTML from './views';

import config from '../../webpack.dev';

const compiler = webpack(config);
const app = new Express();
const server = new Server(app);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);
app.use(webpackHotMiddleware(compiler));
app.use(Express.static(path.join(__dirname, '../../static')));

app.get('*', (request, response) => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const sheet = new ServerStyleSheet();

  const matches1 = routes.reduce((matches, route) => {
    const match = matchPath(request.url, route.path, route);
    if (match && match.isExact) {
      matches.push({
        route,
        match,
        promise: route.component.fetchData
          ? route.component.fetchData({ store, params: match.params })
          : Promise.resolve(null),
      });
    }
    return matches;
  }, []);

  const promises = matches1.map((match) => match.promise);

  Promise.all(promises).then(() => {
    const initialState = store.getState();
    const context = {};

    const appHtml = renderToString(
      <Provider store={store} key="provider">
        <StaticRouter context={context} location={request.url}>
          <StyleSheetManager sheet={sheet.instance}>
            <App />
          </StyleSheetManager>
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      response.redirect(context.url);
    } else {
      const helmet = Helmet.renderStatic();
      const styleTags = sheet.getStyleTags();

      const html = indexHTML(helmet, appHtml, initialState, styleTags);

      return response.status(200).send(html);
    }
    return null;
  });
});

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';

server.listen(port, (error) =>
  console.info(`Server is running on http://localhost:${port} [${env}]`)
);
