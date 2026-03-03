import React from 'react';
import { IoClose } from 'react-icons/io5';
import { 
  ModalOverlay, 
  ModalContent, 
  HeaderBar,
  ModalHeader, 
  Form, 
  InputGroup, 
  Label, 
  InputWrapper, 
  SubmitButton 
} from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
<ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        
        <HeaderBar>
          <button onClick={onClose}>
            <IoClose size={20} color="#999" />
          </button>
        </HeaderBar>

        <ModalHeader>
          <img src="/src/assets/icon-registro.svg" alt="" />
          <h2>Novo Cliente</h2>
        </ModalHeader>

        <Form>
          <InputGroup>
            <Label>Nome do Cliente</Label>
            <InputWrapper>
              <img src="/src/assets/cursor-text.svg" alt="" className="input-icon" />
              <input type="text" placeholder="Digite aqui..." />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <InputWrapper>
              <img src="/src/assets/at.svg" alt="" className="input-icon" />
              <input type="email" placeholder="Digite aqui..." />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>Telefone</Label>
            <InputWrapper>
              <img src="/src/assets/telephone.svg" alt="" className="input-icon" />
              <input type="text" placeholder="Digite aqui..." />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>CNPJ</Label>
            <InputWrapper>
              <img src="/src/assets/card-list.svg" alt="" className="input-icon" />
              <input type="text" placeholder="Digite aqui..." />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>Endereço</Label>
            <InputWrapper>
              <img src="/src/assets/cursor-text.svg" alt="" className="input-icon" />
              <input type="text" placeholder="Digite aqui..." />
            </InputWrapper>
          </InputGroup>

          <SubmitButton type="submit">Novo Registro</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};