// src/components/Button/index.ts
import styled from 'styled-components';

export const PrimaryButton = styled.button`
  background-color: #6C4BB3;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #5a3e96;
  }
`;