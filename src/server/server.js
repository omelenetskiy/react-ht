import path from 'path';
import Express from 'express';
import React from 'react';
import thunk from 'redux-thunk';
import Cookies from 'cookies';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { Server } from 'http';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createStore, applyMiddleware } from 'redux';
import { getStoredState, persistCombineReducers } from 'redux-persist';
import {
  CookieStorage,
  NodeCookiesWrapper,
} from 'redux-persist-cookie-storage';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import reducers from '../shared/store/reducers';

import routes from '../shared/constants/routes';
import config from '../../webpack.dev';
import App from '../shared/App';
import indexHTML from './views';

const compiler = webpack(config);
const app = new Express();
const server = new Server(app);
app.use(Cookies.express());

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);
app.use(webpackHotMiddleware(compiler));
app.use(Express.static(path.join(__dirname, '../../static')));

app.use(async (req, res, next) => {
  const cookieJar = new NodeCookiesWrapper(new Cookies(req, res));

  const persistConfig = {
    key: 'root',
    storage: new CookieStorage(cookieJar),
    stateReconciler(inboundState, originalState) {
      return originalState;
    },
  };

  let preloadedState;
  try {
    preloadedState = await getStoredState(persistConfig);
  } catch (e) {
    preloadedState = {};
  }

  const rootReducer = persistCombineReducers(persistConfig, reducers);

  req.reduxStore = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
  next();
});

app.get('*', async (request, response) => {
  const sheet = new ServerStyleSheet();
  const promises = routes.reduce((matches, route) => {
    const match = matchPath(request.url, route.path, route);
    if (match && match.isExact) {
      matches.push(
        route.component.fetchData
          ? route.component.fetchData({
              store: request.reduxStore,
              params: match.params,
            })
          : Promise.resolve(null)
      );
    }
    return matches;
  }, []);

  await Promise.all(promises);
  const initialState = request.reduxStore.getState();
  const context = {};

  const appHtml = renderToString(
    <Provider store={request.reduxStore}>
      <StaticRouter context={context} location={request.url}>
        <StyleSheetManager sheet={sheet.instance}>
          <App />
        </StyleSheetManager>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();

  const html = indexHTML(helmet, appHtml, initialState, styleTags);

  response.send(html);
});

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';

server.listen(port, (error) =>
  console.info(`Server is running on http://localhost:${port} [${env}]`)
);
