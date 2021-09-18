import { createContext, useCallback, useState, useContext } from 'react';
import { IconType } from 'react-icons';

import { WithChildren } from '@common/interfaces/withChildren';

type ConfirmationModalProviderProps = WithChildren;

interface ConfirmationModalState {
  icon: IconType;
  isVisible: boolean;
  title: string;
  description?: string;
  onConfirm: () => void;
}

interface ConfirmationModalContextData {
  icon: IconType;
  isVisible: boolean;
  title: string;
  description?: string;
  changeVisibility(criteria: boolean): void;
  onConfirm: () => void;
  callModal: (props: Omit<ConfirmationModalState, 'isVisible'>) => void;
  closeModal: () => void;
}

const ConfirmationModalContext = createContext(
  {} as ConfirmationModalContextData,
);

const ConfirmationModalProvider = ({
  children,
}: ConfirmationModalProviderProps) => {
  const [data, setData] = useState<ConfirmationModalState>({
    isVisible: false,
  } as ConfirmationModalState);

  const changeVisibility = useCallback((criteria: boolean) => {
    setData(state => ({ ...state, isVisible: criteria }));
  }, []);

  const callModal = useCallback(
    (props: Omit<ConfirmationModalState, 'isVisible'>) => {
      setData({ ...props, isVisible: true });
    },
    [],
  );

  const closeModal = useCallback(() => {
    setData(state => ({ ...state, isVisible: false }));
  }, []);

  return (
    <ConfirmationModalContext.Provider
      value={{ ...data, changeVisibility, callModal, closeModal }}
    >
      {children}
    </ConfirmationModalContext.Provider>
  );
};

function useConfirmationModal(): ConfirmationModalContextData {
  const context = useContext(ConfirmationModalContext);

  if (!context) {
    throw new Error(
      'useConfirmationModal should be used within an ConfirmationModalProvider',
    );
  }

  return context;
}

export { ConfirmationModalProvider, useConfirmationModal };
