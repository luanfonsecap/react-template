import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from '@common/hooks';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  </>
);

export default App;
