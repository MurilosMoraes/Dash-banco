import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UsersView from "./pages/Users/View";
import AccountAnalytics from "./pages/AccountAnalytics";
import AccountAnalyticsView from "./pages/AccountAnalytics/View";
import CardAnalytics from "./pages/CardAnalytics";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/users" element={<Users />}></Route>
        <Route exact path="/users/view" element={<UsersView />}></Route>
        <Route
          exact
          path="/account-analytics"
          element={<AccountAnalytics />}
        ></Route>
        <Route exact path="/card-analytics" element={<CardAnalytics />}></Route>
        <Route
          exact
          path="/account-analytics/view"
          element={<AccountAnalyticsView />}
        ></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
