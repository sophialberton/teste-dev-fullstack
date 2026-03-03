// src/components/Table/styles.ts
import styled from 'styled-components';

export const TableContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  overflow: hidden;
  margin: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th {
    text-align: left;
    padding: 12px 16px;
    background: #FAFAFA;
    color: #666;
    font-size: 0.85rem;
    border-bottom: 1px solid #EEE;
  }

  td {
    padding: 12px 16px;
    border-bottom: 1px solid #F5F5F5;
    color: #444;
    font-size: 0.9rem;
  }
`;