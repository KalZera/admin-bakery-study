import React, { FunctionComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { PageLogin } from "Pages";

export const PathsDefault = {
  "page-login": "/login",
};

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={PathsDefault["page-login"]} component={PageLogin} />
      <Redirect to={PathsDefault["page-login"]} />
    </Switch>
  );
};
