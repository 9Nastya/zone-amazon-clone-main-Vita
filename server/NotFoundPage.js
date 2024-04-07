import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;