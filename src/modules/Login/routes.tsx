import { RouteWithSubRoutesProps } from '@routes/RouteWithSubRoutes';

import Login from './index';

const LoginRoutes: RouteWithSubRoutesProps[] = [
  {
    path: '/login',
    key: 'APP',
    component: Login,
  },
];

export default LoginRoutes;
