import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export interface RouteWithSubRoutesProps extends Omit<RouteProps, 'component'> {
  component: React.ComponentType<any>;
  routes?: RouteWithSubRoutesProps[];
  key: string;
}

function RouteWithSubRoutes(route: RouteWithSubRoutesProps) {
  const { path, exact, routes } = route;

  return (
    <Route
      path={path}
      exact={exact}
      render={props => <route.component {...props} routes={routes} />}
    />
  );
}

export default RouteWithSubRoutes;
