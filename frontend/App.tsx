import styled from 'styled-components';
import { PrimaryButton } from './components/button';
import { useCustomer } from './contexts/CustomerContext';
import { IoAddOutline } from 'react-icons/io5'; // npm install react-icons

const Container = styled.div`
  padding: 40px;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

function App() {
  const { customers } = useCustomer();

  return (
    <Container>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h2 style={{ color: '#6C4BB3' }}>Goalfy</h2>
          <span>| Registro de Clientes</span>
        </div>
      </Header>

      <PrimaryButton>
        <IoAddOutline size={20} />
        Novo Registro
      </PrimaryButton>

      <div style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '8px' }}>
        {customers.length === 0 ? (
          <p>Nenhum cliente cadastrado ainda.</p>
        ) : (
          <p>Você tem {customers.length} registros.</p>
        )}
      </div>
    </Container>
  );
}

export default App;