import { BrowserRouter } from 'react-router-dom';

import { ConfirmationModal } from '@common/components/Modal';
import AppProvider from '@common/hooks';

import Routes from './routes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ConfirmationModal />
    </AppProvider>
  );
}

export default App;
