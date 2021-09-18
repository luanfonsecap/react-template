import HomeRoutes from '@modules/Home/routes';
import LoginRoutes from '@modules/Login/routes';

import { RouteWithSubRoutesProps } from './RouteWithSubRoutes';

const ROUTES: RouteWithSubRoutesProps[] = [
  { path: '/', key: 'ROOT', exact: true, component: () => <h1>Index</h1> },
  ...LoginRoutes,
  ...HomeRoutes,
];

export default ROUTES;
