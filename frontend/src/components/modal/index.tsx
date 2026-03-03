import React, { useState } from 'react';
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
// Importamos o hook customizado que você criou no Context
import { useCustomer } from '../../contexts/CustomerContext';
import { ScrollContainer } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // Pegamos a função de busca de CEP do contexto
  const { fetchAddressByCep } = useCustomer();

  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [loadingCep, setLoadingCep] = useState(false);

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Opcional: Máscara básica de CEP (xxxxx-xxx)
    value = value.replace(/\D/g, '');
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    
    setCep(value.substring(0, 9));

    // Quando atingir 8 dígitos numéricos, busca o endereço
    if (value.replace(/\D/g, '').length === 8) {
      setLoadingCep(true);
      const data = await fetchAddressByCep(value); 
      
      if (data) {
        setAddress(`${data.logradouro}, ${data.bairro}`);
        setCity(`${data.localidade} - ${data.uf}`);
      }
      setLoadingCep(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <HeaderBar>
          <button onClick={onClose}>
            <IoClose size={24} color="#232426" />
          </button>
        </HeaderBar>

        <ScrollContainer>
          <ModalHeader>
            <img src="/src/assets/icon-registro.svg" alt="" />
            <h2>Novo Cliente</h2>
          </ModalHeader>

          <Form onSubmit={(e) => e.preventDefault()}>
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
            <Label>CEP</Label>
            <InputWrapper>
              <img src="/src/assets/cursor-text.svg" alt="" className="input-icon" />
              <input 
                type="text" 
                placeholder="00000-000" 
                value={cep}
                onChange={handleCepChange}
              />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>Endereço</Label>
            <InputWrapper>
              <img src="/src/assets/cursor-text.svg" alt="" className="input-icon" />
              <input 
                type="text" 
                placeholder={loadingCep ? "Buscando..." : "Digite aqui..."} 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>Cidade</Label>
            <InputWrapper>
              <img src="/src/assets/cursor-text.svg" alt="" className="input-icon" />
              <input 
                type="text" 
                placeholder="Cidade - UF" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </InputWrapper>
          </InputGroup>

            <SubmitButton type="submit">Novo Registro</SubmitButton>
          </Form>
        </ScrollContainer>
      </ModalContent>
    </ModalOverlay>
  );
};