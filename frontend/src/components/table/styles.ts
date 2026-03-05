import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  background: white;
  border-radius: 8px;
    max-height: 70vh; /* Ajuste para ocupar 70% da altura da tela, por exemplo */
  overflow-y: auto;  /* Habilita a barra lateral se houver muitos registros */
  overflow-x: auto;  /* Mantém a barra horizontal se for muito larga */

  /* Estilo opcional para deixar a barra de rolagem mais bonita */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;

export const TableContainer = styled.div`
  flex: 1;                    /* Faz a tabela esticar e ocupar o espaço disponível */
  overflow-y: auto;           /* Ativa a rolagem interna */
  flex-direction: column;
  width: 100%;
  max-height: 450px; /* Define a altura máxima interna da tabela */
  overflow-y: auto;  /* Ativa a barra de rolagem interna */
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  /* Estilização da barra de rolagem para ficar discreta dentro da tabela */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
    border-radius: 10px;
  }
`;
export const StyledTable = styled.table`
  width: 100%; /* A tabela se expande para preencher o Wrapper */
  border-collapse: collapse;
  table-layout: auto; /* Permite que o navegador ajuste as colunas proporcionalmente */
  
  thead {
    position: sticky;         /* O "pulo do gato" para fixar o cabeçalho */
    top: 0;                   /* Fixa no topo do TableContainer */
    z-index: 10;              /* Garante que fique acima das linhas de dados */
    background-color: #f9f9f9; /* Cor sólida para não ser transparente ao rolar */
  }
  
  thead tr {
    height: 49px;
    background: #FFFFFF;
    position: relative;
  }

  th {
    text-align: left;
    padding: 0 16px;
    color: #666D73;
    font-size: 13px;
    font-weight: 500;
    border-bottom: 1px solid #E8E8E8;
    position: relative; /* Necessário para posicionar a divisória */

    /* Criando a divisória vertical "incompleta" */
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: 0;
      top: 25%;      /* Inicia a 25% do topo */
      height: 50%;   /* Ocupa apenas 50% da altura total da linha */
      width: 1px;
      background-color: #E8E8E8;
    }
  }
   tbody tr {
    background-color: #F9F9F9; 
    transition: background-color 0.2s;
  }
  td {
    padding: 12px 16px;
    border-bottom: 1px solid #F5F5F5;
    color: #363E40;
    font-size: 13px;
    
    /* Efeito de hover ou seleção conforme a imagem image_7e50e1 */
    tr:hover & {
      background-color: #F9F9F9;
    }
  }
  th, td {
    white-space: nowrap; /* Evita que o texto quebre linha em telas menores */
  }
  tbody tr.selected {
    outline: 1px solid #0091FF;
    background-color: #F0F7FF;
  }
`;

// Container para alinhar ícone e texto no Header
export const HeaderCellContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 16px;
    height: 16px;
    opacity: 0.6;
  }
`;
