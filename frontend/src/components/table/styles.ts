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
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #E6E6E6;
  overflow-y: auto;           /* Habilita a barra lateral interna */
  display: flex;
  flex-direction: column;
/* Mantém o espaço da barra reservado para não "pular" o layout */
  scrollbar-gutter: stable; 
  overflow-y: auto; 
  
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  /* Scrollbar discreta para não poluir o visual do Figma */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #DDD;
    border-radius: 10px;
  }

`;
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto; /* Permite que o navegador ajuste as colunas proporcionalmente */

  thead {
    position: sticky;         /* O "pulo do gato" para fixar o cabeçalho */
    top: 0;                   /* Fixa no topo do TableContainer */
    z-index: 10;              /* Garante que fique acima das linhas de dados */
    background-color: #f9f9f9; /* Cor sólida para não ser transparente ao rolar */
  }
  /* REMOVA qualquer height: 100% ou flex: 1 daqui */
  /* Isso garante que ela só ocupe o espaço das linhas existentes */

  thead tr {
    height: 49px;
    background: #FFFFFF;
    position: sticky; /* Cabeçalho fixo */
    top: 0;
    z-index: 10;
  }

 th {
    text-align: left;
    padding: 0 16px;
    color: #666D73;
    font-size: 13px;
    font-weight: 500;
    border-bottom: 1px solid #E8E8E8;
    background: #FFFFFF; /* Fundo sólido para cobrir as linhas no scroll */
    position: relative;   /* Necessário para a divisória ::after */

    /* Divisória vertical incompleta (50% da altura) */
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: 0;
      top: 25%;      /* Inicia a 25% do topo */
      height: 50%;   /* Ocupa 50% da altura total */
      width: 1px;
      background-color: #E8E8E8;
    }
  }
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
    height: 45px;
    background-color: #F9F9F9; /* A cor de fundo que você queria */
    
    &:hover {
      background-color: #F2F2F2; /* Um tom levemente diferente no hover */
    }
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
