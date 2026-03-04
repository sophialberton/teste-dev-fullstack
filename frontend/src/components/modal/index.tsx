// frontend/src/components/modal/index.tsx
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
  SubmitButton,
  ScrollContainer
} from './styles';
import { useCustomer } from '../../contexts/CustomerContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Funções utilitárias de formatação
const formatPhone = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove tudo o que não é dígito
    .replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca parênteses em volta dos dois primeiros dígitos
    .replace(/(\d{5})(\d)/, '$1-$2') // Coloca o hífen após o quinto dígito
    .substring(0, 15); // Limita o tamanho
};

const formatCNPJ = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .substring(0, 18);
};

export const CustomerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { fetchAddressByCep, addCustomer } = useCustomer();

  // Estados dos campos
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [loadingCep, setLoadingCep] = useState(false);
  // Handler para Telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  // Handler para CNPJ
  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(formatCNPJ(e.target.value));
  };
  // Busca de CEP Automática
  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número

    // Máscara xxxxx-xxx
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    setCep(value.substring(0, 9));

    // Quando o CEP estiver completo (8 dígitos), faz a busca
    if (value.replace(/\D/g, '').length === 8) {
      setLoadingCep(true);
      const data = await fetchAddressByCep(value);

      if (data) {
        setAddress(`${data.logradouro}${data.bairro ? `, ${data.bairro}` : ''}`);
        setCity(`${data.localidade} - ${data.uf}`);
      }
      setLoadingCep(false);
    }
  };

  // Validação e Envio
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação de campos obrigatórios
    if (!name || !email || !cep || !address || !city) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Validação simples de E-mail
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Salva o cliente usando o Context
    addCustomer({
      name,
      email,
      phone,
      cnpj,
      address,
      city
    });

    // Limpa os campos e fecha o modal
    setName('');
    setEmail('');
    setPhone('');
    setCnpj('');
    setCep('');
    setAddress('');
    setCity('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <HeaderBar>
          <button onClick={onClose}><IoClose size={24} color="#232426" /></button>
        </HeaderBar>

        <ScrollContainer>
          <ModalHeader>
            <img src="/src/assets/icon-registro.svg" alt="Registro" />
            <h2>Novo Cliente</h2>
          </ModalHeader>

          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Nome do Cliente</Label>
              <InputWrapper>
                <img src="/src/assets/cursor-text.svg" alt="" className="input-icon" />
                <input type="text" placeholder="Digite aqui..." value={name} onChange={e => setName(e.target.value)} />
              </InputWrapper>
            </InputGroup>

            <InputGroup>
              <Label>Email</Label>
              <InputWrapper>
                <img src="/src/assets/at.svg" alt="" className="input-icon" />
                <input type="email" placeholder="Digite aqui..." value={email} onChange={e => setEmail(e.target.value)} />
              </InputWrapper>
            </InputGroup>

            <InputGroup>
              <Label>Telefone</Label>
              <InputWrapper>
                <img src="/src/assets/telephone.svg" alt="" className="input-icon" />
                <input
                  type="text"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={handlePhoneChange} // Usando a nova função
                />
              </InputWrapper>
            </InputGroup>

            <InputGroup>
              <Label>CNPJ</Label>
              <InputWrapper>
                <img src="/src/assets/card-list.svg" alt="" className="input-icon" />
                <input
                  type="text"
                  placeholder="00.000.000/0000-00"
                  value={cnpj}
                  onChange={handleCnpjChange} // Usando a nova função
                />
              </InputWrapper>
            </InputGroup>

            <InputGroup>
              <Label>CEP</Label>
              <InputWrapper>
                <img src="/src/assets/cursor-text.svg" alt="" className="input-icon" />
                <input type="text" placeholder="00000-000" value={cep} onChange={handleCepChange} />
              </InputWrapper>
            </InputGroup>

            <InputGroup>
              <Label>Endereço</Label>
              <InputWrapper>
                <img src="/src/assets/cursor-text.svg" alt="" className="input-icon" />
                <input type="text" placeholder={loadingCep ? "Buscando..." : "Digite aqui..."} value={address} onChange={e => setAddress(e.target.value)} />
              </InputWrapper>
            </InputGroup>

            <InputGroup>
              <Label>Cidade</Label>
              <InputWrapper>
                <img src="/src/assets/cursor-text.svg" alt="" className="input-icon" />
                <input type="text" placeholder="Cidade - UF" value={city} onChange={e => setCity(e.target.value)} />
              </InputWrapper>
            </InputGroup>

            <SubmitButton type="submit">Novo Registro</SubmitButton>
          </Form>
        </ScrollContainer>
      </ModalContent>
    </ModalOverlay>
  );
};