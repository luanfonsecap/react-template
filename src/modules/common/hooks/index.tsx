import { WithChildren } from '@common/interfaces/withChildren';

import { AuthProvider } from './AuthHook';
import { ConfirmationModalProvider } from './ConfirmationModalHook';

function AppProvider({ children }: WithChildren) {
  return (
    <AuthProvider>
      <ConfirmationModalProvider>{children}</ConfirmationModalProvider>
    </AuthProvider>
  );
}

export default AppProvider;
