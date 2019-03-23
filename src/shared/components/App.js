// Imports
import React, { lazy, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import ErrorBoundary from "./common/errorBoundary/ErrorBoundary";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("./layout/home/Home"));
const MoviePreview = lazy(() => import("./common/moviePreview/MoviePreview"));
const NotFound = lazy(() => import("./common/notFound/NotFound"));

import { ThemeProvider } from "styled-components";
import { theme } from "./styled/theme";
import { GlobalStyle } from "./styled/globalStyle";

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Header />

      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Loading(Home)} />
          <Route path="/search" component={Loading(Home)} />
          <Route path="/movie/:id" component={Loading(MoviePreview)} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>

      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default hot(App);
