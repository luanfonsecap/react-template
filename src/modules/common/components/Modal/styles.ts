import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 600px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;

  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ccc;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
`;

export const Actions = styled.div``;

export const Overlay = styled.div`
  z-index: 99;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
`;
