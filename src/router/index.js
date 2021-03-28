import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import { AuthProvider } from "../contexts/AuthContext";

import GlobalStyles from "../globalStyles";

const DIYRouter = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <AuthProvider>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Header />
                  <Home />
                  <Footer />
                </Fragment>
              )}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default DIYRouter;
