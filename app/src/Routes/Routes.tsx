import React, { FunctionComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { PageHome } from "Pages";

export const PathsDefault = {
  "page-home": "/",
};

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={PathsDefault["page-home"]} component={PageHome} />
      <Redirect to={PathsDefault["page-home"]} />
    </Switch>
  );
};
