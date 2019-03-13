// Imports
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../shared/components/App";

import { store } from "../shared/store/store";

import "./styles.scss";

const Client = () => (
  <Provider store={store} key="provider">
    <Router>
      <App />
    </Router>
  </Provider>
);

hydrate(<Client />, document.getElementById("root"));
