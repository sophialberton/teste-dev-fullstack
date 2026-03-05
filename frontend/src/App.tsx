import { Header } from './components/header';
import { CustomerTable } from './components/table';
import { PrimaryButton, SearchInput, SearchContainer } from './components/button/index';
import { useState, useMemo } from 'react'; // Adicionado useMemo para performance
import styled from 'styled-components';
import { useCustomer } from './contexts/CustomerContext';
import plusCircle from './assets/plus-circle.svg';
import searchIcon from './assets/search.svg';
import { CustomerModal } from './components/modal';

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px); /* Altura total menos o seu Header */
  padding: 24px;              /* Este é o espaço fixo (respiro) em todos os lados */
  box-sizing: border-box;
  overflow: hidden;           /* Impede que a página inteira tenha scroll */
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
  const [searchTerm, setSearchTerm] = useState(''); // Estado para a pesquisa

  // Lógica de filtragem
  const filteredCustomers = useMemo(() => {
    return customers.filter(customer => 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.cnpj.includes(searchTerm)
    );
  }, [customers, searchTerm]);

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
            <SearchInput 
              placeholder="Pesquisar..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo ao digitar
            />
          </SearchContainer>

          {/* Mostra a contagem baseada no filtro ou no total */}
          <span>{filteredCustomers.length} Registros</span>
        </ActionBar>

        {/* Importante: Passar os clientes filtrados para a tabela */}
        <CustomerTable customers={filteredCustomers} /> 
      </PageContainer>

      <CustomerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default App;