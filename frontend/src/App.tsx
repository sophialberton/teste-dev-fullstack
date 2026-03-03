import { Header } from './components/header';
import { CustomerTable } from './components/table';
import { PrimaryButton } from './components/button/styles';
import { SearchInput } from './components/button/styles';
import { SearchContainer } from './components/button/styles';
import { useState } from 'react';
import styled from 'styled-components';
import { useCustomer } from './contexts/CustomerContext';
import plusCircle from './assets/plus-circle.svg';
import searchIcon from './assets/search.svg';
import { CustomerModal } from './components/modal';

const MainContent = styled.main`
  padding: 104px 96px 40px; 
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 25px;

  span {
    font-size: 12px;
    color: #666;
    font-weight: 500;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  max-width: 100vw; /* Garante que não ultrapasse a largura da tela */
  margin: 0 auto;
  padding: 104px 96px 40px; /* Mantém o alinhamento de 96px à esquerda */
  box-sizing: border-box; /* Essencial para que o padding não "empurre" a largura para fora */
  overflow-x: hidden; /* Evita o scroll horizontal indesejado na página inteira */
`;

function App() { 
  const { customers } = useCustomer(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <PageContainer>
        <ActionBar>
          <PrimaryButton onClick={() => setIsModalOpen(true)}>
          <img src={plusCircle} alt="Círculo Mais" className='circulo-mais'/>
            Novo Registro
          </PrimaryButton>
            <SearchContainer>
              <img src={searchIcon} alt="Lupa" />
            <SearchInput placeholder="Pesquisar..." />
            </SearchContainer>
          <span>{customers.length} Registros</span>
        </ActionBar>
        <CustomerTable />
      </PageContainer>
      <CustomerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default App;