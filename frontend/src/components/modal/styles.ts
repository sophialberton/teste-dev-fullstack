// frontend/src/components/modal/styles.ts
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  width: 491px; /* Largura exata do Figma */
  height: 600px; /* Altura exata do Figma */
  border-radius: 8px; /* Arredondamento do Figma */
  overflow: hidden; /* IMPORTANTE: Garante que a barra cinza respeite o arredondamento */
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #E4E5E7;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const HeaderBar = styled.div`
  width: 100%;
  height: 40px; /* Altura do Figma */
  background-color: #F9F9F9; /* Cor do Figma */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 12px;
  border-bottom: 1px solid #E4E5E7;
  flex-shrink: 0; /* Impede que a barra diminua de tamanho */

  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ScrollContainer = styled.div`
  flex: 1; /* Ocupa o espaço restante do modal */
  overflow-y: auto; /* Permite rolagem se o conteúdo exceder os 600px */
  padding-bottom: 30px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e8e8e8;
    border-radius: 10px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 32px 32px 16px 32px; /* Alinhado a 32px da esquerda */

  h2 {
    font-family: 'Red Hat Text', sans-serif;
    font-size: 24px;
    font-weight: 500; /* Medium conforme solicitado */
    color: #232426;
    line-height: 100%;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 32px; /* Alinhamento 'left: 32px' do Figma */
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 427px; /* Largura do input do Figma */
`;

export const Label = styled.label`
  font-family: 'Red Hat Text', sans-serif;
  font-size: 13px;
  font-weight: 500; /* Medium conforme solicitado */
  color: #232426;
  line-height: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 40px; /* Altura equilibrada para o design */
    background: #F2F2F2;
    border: none;
    border-radius: 8px;
    padding: 0 12px 0 38px;
    font-size: 14px;
    color: #333;

    &::placeholder {
      color: #B2B2B2;
    }
  }

  .input-icon {
    position: absolute;
    left: 12px;
    width: 16px;
    height: 16px;
    opacity: 0.5;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 48px; /* Altura fixa para não achatar */
  min-height: 48px; /* Garante que não diminua */
  background: #5D29A1;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Red Hat Text', sans-serif;
  font-size: 18px; /* Tamanho do Figma */
  font-weight: 700; /* Bold para o botão */
  margin-top: 10px;
  cursor: pointer;
  flex-shrink: 0; /* Impede o achatamento */

  &:hover {
    filter: brightness(0.9);
  }
`;