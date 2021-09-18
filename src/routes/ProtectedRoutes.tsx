import { Redirect } from 'react-router-dom';

import { toast } from '@common/components/Toast';

import RenderRoutes, { RenderRoutesProps } from './RenderRoutes';

function ProtectedRoutes(props: RenderRoutesProps) {
  if (!localStorage.getItem('@app:user')) {
    toast.warning('Você precisa estar logado para acessar essa página!');
    return <Redirect to="/login" />;
  }
  return <RenderRoutes {...props} />;
}

export default ProtectedRoutes;
