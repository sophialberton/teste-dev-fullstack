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
  /* Responsividade aqui: */
  width: 95%; 
  max-width: 480px; 
  max-height: 90vh; /* Não deixa o modal ser maior que a altura da tela */
  overflow-y: auto; /* Adiciona scroll interno se o form for muito longo */
  border-radius: 12px;
  padding: 0 0 30px 0; 
  position: relative;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  overflow-x: hidden;
  /* Estilização da barra de rolagem para ficar elegante */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e8e8e8;
    border-radius: 10px;
  }
`;

// Esta é a faixa cinza que cobre apenas a área do X
export const HeaderBar = styled.div`
  width: 100%;
  height: 32px; /* Altura pequena para cobrir apenas o X */
  background-color: #F2F2F2; /* Cinza claro */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 12px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 40px 10px 40px; /* Padding ajustado para o título */

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #232426;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

// Garante que o formulário mantenha o alinhamento de 40px
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 40px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #333;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .input-icon {
    position: absolute;
    left: 12px;
    width: 16px;
    height: 16px;
    opacity: 0.5;
  }

  input {
    width: 100%;
    height: 40px;
    background: #F2F2F2;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    padding: 0 12px 0 38px;
    font-size: 14px;
    color: #333;

    &::placeholder {
      color: #999;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  background: #5D29A1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;