import ProtectedRoutes from '@routes/ProtectedRoutes';
import { RenderRoutesProps } from '@routes/RenderRoutes';
import { RouteWithSubRoutesProps } from '@routes/RouteWithSubRoutes';

import Home from './index';

const HomeRoutes: RouteWithSubRoutesProps[] = [
  {
    path: '/home',
    key: 'APP',
    component: (props: RenderRoutesProps) => <ProtectedRoutes {...props} />,
    routes: [
      {
        path: '/home',
        key: 'APP_PAGE',
        exact: true,
        component: Home,
      },
    ],
  },
];

export default HomeRoutes;
