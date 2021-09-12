import { useConfirmationModal } from '@common/hooks/ConfirmationModalHook';

import { Actions, Container, Overlay } from './styles';

export function ConfirmationModal() {
  const {
    icon: Icon,
    title,
    description,
    onConfirm,
    isVisible,
    changeVisibility,
  } = useConfirmationModal();

  if (!isVisible) {
    return <div style={{ display: 'none' }} />;
  }

  return (
    <>
      <Container>
        <Icon />

        <h1>{title}</h1>

        {description ? <p>{description}</p> : null}

        <Actions>
          <button type="button" onClick={() => changeVisibility(false)}>
            Cancelar
          </button>
          <button type="button" onClick={onConfirm}>
            Confirmar
          </button>
        </Actions>
      </Container>
      <Overlay />
    </>
  );
}
