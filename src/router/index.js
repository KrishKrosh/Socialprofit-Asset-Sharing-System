import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import Terms from "../pages/Auth/Terms";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import { AuthProvider } from "../contexts/AuthContext";

import GlobalStyles from "../globalStyles";
import AddAsset from "../pages/LoggedIn/addAsset";
import AssetInfo from "../pages/LoggedIn/assetInfo";

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
                </Fragment>
              )}
            />
            <Route
              exact
              path="/addAsset"
              render={() => (
                <Fragment>
                  <Header />
                  <AddAsset />
                </Fragment>
              )}
            />
            <Route path="/asset">
              <Fragment>
                <Header />
                <AssetInfo />
              </Fragment>
            </Route>
            <Route path="/terms">
              <Fragment>
                <Header />
                <Terms />
              </Fragment>
            </Route>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default DIYRouter;
