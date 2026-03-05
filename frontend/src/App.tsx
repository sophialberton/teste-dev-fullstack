import { Header } from './components/header';
import { CustomerTable } from './components/table';
import { PrimaryButton, SearchInput, SearchContainer } from './components/button/index';
import { useState, useMemo } from 'react'; 
import styled from 'styled-components';
import { useCustomer } from './contexts/CustomerContext';
import plusCircle from './assets/plus-circle.svg';
import searchIcon from './assets/search.svg';
import { CustomerModal } from './components/modal';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const ContentArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* Padding seguindo o Figma: Topo 80px (já considerando header), Laterais 96px */
  padding: 80px 96px 40px; 
  background-color: #F8F8F8;
  overflow: hidden;
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