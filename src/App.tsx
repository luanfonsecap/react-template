import { BrowserRouter } from 'react-router-dom';

import { ConfirmationModal } from '@common/components/Modal';
import { ToastComponent } from '@common/components/Toast';
import AppProvider from '@common/hooks';

import ROUTES from './routes';
import RenderRoutes from './routes/RenderRoutes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <RenderRoutes routes={ROUTES} />
      </BrowserRouter>
      <ConfirmationModal />
      <ToastComponent />
    </AppProvider>
  );
}

export default App;
