import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ROUTES, ROUTES_ADMIN } from "./constans";
import Header from "../components/Header";
const AuthScreen = React.lazy(() => import("../screens/auth"));
const UserScreen = React.lazy(() => import("../screens/user"));
const AdminScreen = React.lazy(() => import("../screens/admin"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Header />
        <Switch>
          {/*  */}
          <Route exact path={ROUTES.AUTH} component={AuthScreen} />
          {/* ROOT */}

          <Route exact path={ROUTES.HOME} component={UserScreen} />

          <Route exact path={ROUTES_ADMIN.HOME} component={AdminScreen} />
          <Redirect exact from="***" to="/" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
