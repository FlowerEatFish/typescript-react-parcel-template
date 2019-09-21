// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Router from "./router";
import "./style/master.scss";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Router />
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
