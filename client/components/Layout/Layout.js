import React, { Suspense, lazy } from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages

// import Typography from "../../pages/typography";
// import Notifications from "../../pages/notifications";
// import Maps from "../../pages/maps";
// import Tables from "../../pages/tables";
// import Icons from "../../pages/icons";
// import Charts from "../../pages/charts";

// import Dashboard from "../../pages/dashboard";
// import Employees from "../../pages/employees"
// import Products from "../../pages/products"

const Dashboard = lazy(() => import('../../pages/dashboard'));
const Employees = lazy(() => import('../../pages/employees'));
const Products = lazy(() => import('../../pages/products'));

// context
import { useLayoutState } from "../../context/LayoutContext";


function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/employees" component={Employees} />
              <Route path="/app/products" component={Products} />
              {/* <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/notifications" component={Notifications} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} /> */}
            </Switch>
          </Suspense>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
