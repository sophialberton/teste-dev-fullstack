// src/components/button/styles.ts
import styled from 'styled-components';

export const PrimaryButton = styled.button`
  width: 158px;
  height: 29px;
  background-color: #5D29A1;
  color: white;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const SearchInput = styled.input`
  width: 183px;
  height: 25px;
  border: 1px solid #E8E8E8;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 12px;
`;