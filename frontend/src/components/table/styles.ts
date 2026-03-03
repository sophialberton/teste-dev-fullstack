import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%; /* Ocupa todo o espaço disponível no PageContainer */
  background: white;
  border-radius: 8px;
  border: 1px solid #E8E8E8;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  overflow-x: auto; 
  margin-top: 20px;
`;

export const StyledTable = styled.table`
  width: 100%; /* A tabela se expande para preencher o Wrapper */
  border-collapse: collapse;
  table-layout: auto; /* Permite que o navegador ajuste as colunas proporcionalmente */
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
