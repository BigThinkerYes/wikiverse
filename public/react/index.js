import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";

import { App } from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
