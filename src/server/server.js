import path from "path";
import fs from "fs";
import { Server } from "http";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { matchPath } from "react-router";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
// App Imports
import { rootReducer } from "../shared/store/store";

import routes from "../shared/routes";
import App from "../shared/components/App";
import index from "./views/index";

import config from "../../webpack.config";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const compiler = webpack(config);
// Create new server
const app = new express();
const server = new Server(app);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));

// Static files folder
app.use(express.static(path.join(__dirname, "../../static")));

// Store (new store for each request)
const store = createStore(rootReducer, applyMiddleware(thunk));

// Match any Route
app.get("*", (request, response) => {
  let status = 200;
  const sheet = new ServerStyleSheet();

  const matches = routes.reduce((matches, route) => {
    const match = matchPath(request.url, route.path, route);
    if (match && match.isExact) {
      matches.push({
        route,
        match,
        promise: route.component.fetchData
          ? route.component.fetchData({ store, params: match.params })
          : Promise.resolve(null)
      });
    }
    return matches;
  }, []);

  // No such route, send 404 status
  if (matches.length === 0) {
    status = 404;
  }

  // Any AJAX calls inside components
  const promises = matches.map(match => {
    return match.promise;
  });

  // Resolve the AJAX calls and render
  Promise.all(promises).then(
    (...data) => {
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
        // Get Meta header tags
        const helmet = Helmet.renderStatic();
        const styleTags = sheet.getStyleTags();

        let html = index(helmet, appHtml, initialState, styleTags);
        fs.writeFileSync("static/index.html", html);

        // Reset the state on server
        store.dispatch({
          type: "RESET"
        });

        // Finally send generated HTML with initial data to the client
        return response.status(status).send(html);
      }
    },
    error => {
      console.error(response, error);
    }
  );
});

// Start Server
const port = process.env.PORT || 5000;
const env = process.env.MODE || "development";
server.listen(port, error => {
  if (error) {
    return console.error(error);
  } else {
    return console.info(`Server running on http://localhost:${port} [${env}]`);
  }
});
