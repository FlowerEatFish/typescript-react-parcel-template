// index.tsx
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/animate.css/animate.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

import Router from "./router";
import "./style/master.scss";

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Router />
    </Container>
  </BrowserRouter>,
  document.getElementById("app")
);
