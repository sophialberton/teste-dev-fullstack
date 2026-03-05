import { Header } from './components/header';
import { CustomerTable } from './components/table';
import { PrimaryButton, SearchInput, SearchContainer } from './components/button/index';
import { useState, useMemo } from 'react'; 
import styled from 'styled-components';
import { useCustomer } from './contexts/CustomerContext';
import plusCircle from './assets/plus-circle.svg';
import searchIcon from './assets/search.svg';
import { CustomerModal } from './components/modal';

// 1. O Wrapper principal ocupa toda a altura da tela (100vh)
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  overflow: hidden; /* Impede que a página inteira role */
`;

// 2. A ContentArea preenche o espaço abaixo do Header fixo
const ContentArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* 80px compensa o Header. 96px de padding nas laterais conforme o Figma */
  padding: 80px 96px 40px; 
  box-sizing: border-box;
  overflow: hidden; /* Garante que apenas a tabela dentro dela tenha scroll */
`;

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 25px;
  flex-shrink: 0; /* Impede que a barra de busca "encolha" */

  span {
    font-size: 12px;
    color: #666;
    font-weight: 500;
  }
`;

function App() { 
  const { customers } = useCustomer(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = useMemo(() => {
    return customers.filter(customer => 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.cnpj.includes(searchTerm)
    );
  }, [customers, searchTerm]);

  return (
    <AppWrapper>
      <Header />
      
      <ContentArea>
        <ActionBar>
          <PrimaryButton onClick={() => setIsModalOpen(true)}>
            <img src={plusCircle} alt="Círculo Mais" className='circulo-mais'/>
            Novo Registro
          </PrimaryButton>
          
          <SearchContainer>
            <img src={searchIcon} alt="Lupa" />
            <SearchInput 
              placeholder="Pesquisar..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>

          <span>{filteredCustomers.length} Registros</span>
        </ActionBar>

        {/* A tabela agora crescerá para ocupar todo o fundo da ContentArea */}
        <CustomerTable customers={filteredCustomers} /> 
      </ContentArea>

      <CustomerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </AppWrapper>
  );
}

export default App;