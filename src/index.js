import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoardPage from "./components/pages/board_page";
import CardPage from "./components/pages/card_page";
import Header from "./components/modules/header";
import "./css/styles.css";
import "./css/util.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Header />
    <Route exact path="/" component={BoardPage} />
    <Route path="/board" name="board" component={BoardPage} />
    <Route path="/card" name="card" component={CardPage} />
  </Router>,
  rootElement
);
