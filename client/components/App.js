import React, {Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'
// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
import { useUserState } from "../context/UserContext";

import configureStore from '../store/configureStore'
import Products from '../pages/products/Products'
import StoreContext from '../context/StoreContext'
const store = configureStore()


class StoreProvider extends Component{ 
  getChildContext(){
    return {
      store: this.props.store
    }
  }
  render(){
    return this.props.children
  }
}

StoreProvider.childContextTypes = { 
  store: PropTypes.object
}

export default function App() {
  // global
  var { isAuthenticated } = useUserState();
  return (
    <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>

    </Provider>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
