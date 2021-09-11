import { BrowserRouter } from 'react-router-dom';

import AppProvider from '@common/hooks';
import { ConfirmationModal } from '@common/components/Modal';
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
