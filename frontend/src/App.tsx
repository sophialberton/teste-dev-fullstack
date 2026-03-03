import { Header } from './components/header';
import { CustomerTable } from './components/table';
import { PrimaryButton } from './components/button/styles';
import { SearchInput } from './components/button/styles';
import { IoAddOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { useCustomer } from './contexts/CustomerContext';

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

function App() {
  const { customers } = useCustomer();

  return (
    <>
      <Header />
      <MainContent>
        <ActionBar>
          <PrimaryButton>
            <IoAddOutline size={16} />
            Novo Registro
          </PrimaryButton>
          <SearchInput placeholder="Pesquisar..." />
          <span>{customers.length} Registros</span>
        </ActionBar>
        
        <CustomerTable />
      </MainContent>
    </>
  );
}

export default App;