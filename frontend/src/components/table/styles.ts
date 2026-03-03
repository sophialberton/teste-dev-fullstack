import styled from 'styled-components';

// Verifique se este nome (TableContainer) está sendo exportado
export const TableContainer = styled.div`
  width: 1304px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  overflow: hidden;
  border: 1px solid #E8E8E8;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  thead tr {
    height: 49px;
    background: #FFFFFF;
  }

  th {
    text-align: left;
    padding-left: 16px;
    color: #666D73; /* Cor do Header do seu design */
    font-size: 13px;
    font-weight: 500;
    border-bottom: 1px solid #E8E8E8;
  }

  td {
    padding: 12px 16px;
    border-bottom: 1px solid #F5F5F5;
    color: #363E40; /* Cor dos registros do seu design */
    font-size: 13px;
  }
`;