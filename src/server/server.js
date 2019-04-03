import path from 'path';
import Express from 'express';
import React from 'react';
import thunk from 'redux-thunk';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { Server } from 'http';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import stats from '../../static/js/react-loadable.json';
import rootReducer from '../shared/store/reducers';

import routes from '../shared/constants/routes';
import App from '../shared/components/App';
import indexHTML from './views';

import config from '../../webpack.dev';

const compiler = webpack(config);
const app = new Express();
const server = new Server(app);

if (process.env.NODE_ENV !== 'production') {
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
    })
  );
  app.use(webpackHotMiddleware(compiler));
  app.use(Express.static(path.join(__dirname, '../../static')));
}

app.get('*', (request, response) => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const sheet = new ServerStyleSheet();
  const modules = [];

  const promises = routes.reduce((matches, route) => {
    const match = matchPath(request.url, route.path, route);
    if (match && match.isExact) {
      matches.push(
        route.component.fetchData
          ? route.component.fetchData({ store, params: match.params })
          : Promise.resolve(null)
      );
    }
    return matches;
  }, []);

  Promise.all(promises);

  const initialState = store.getState();
  const context = {};

  const appHtml = renderToString(
    <Loadable.Capture report={(moduleName) => modules.push(moduleName)}>
      <Provider store={store}>
        <StaticRouter context={context} location={request.url}>
          <StyleSheetManager sheet={sheet.instance}>
            <App />
          </StyleSheetManager>
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  );

  const bundles = getBundles(stats, modules);
  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();

  const html = indexHTML(helmet, appHtml, initialState, styleTags, bundles);

  return response.send(html);
});

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';

Loadable.preloadAll().then(() => {
  server.listen(port, (error) => {
    if (error) {
      return console.error(error);
    }
    return console.info(
      `Server is running on http://localhost:${port} [${env}]`
    );
  });
});
