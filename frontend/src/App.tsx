import styled from 'styled-components';
import { useCustomer } from './contexts/CustomerContext';
import { PrimaryButton } from './components/button';
import { IoAddOutline } from 'react-icons/io5';

const Container = styled.div`
  padding: 40px;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh; /* Garante que o fundo ocupe a tela toda */
  width: 100%;
`;

function App() {
  const { customers } = useCustomer();

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <h2 style={{ color: '#6C4BB3' }}>Goalfy</h2>
        <span>| Registro de Clientes</span>
      </div>

      <PrimaryButton>
        <IoAddOutline size={20} />
        Novo Registro
      </PrimaryButton>

      <div style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '8px', color: '#333' }}>
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