import { Route, Switch } from 'react-router-dom';

import RouteWithSubRoutes, {
  RouteWithSubRoutesProps,
} from './RouteWithSubRoutes';

export type RenderRoutesProps = {
  routes: RouteWithSubRoutesProps[];
};

function RenderRoutes({ routes }: RenderRoutesProps) {
  return (
    <Switch>
      {routes.map(route => {
        return <RouteWithSubRoutes {...route} key={route.key} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

export default RenderRoutes;
