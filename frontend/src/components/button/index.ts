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

  .circulo-mais {
    width: 16px;  /* Tamanho padrão de ícone */
    height: 16px;
    display: block;
    /* Removemos o border-radius e object-position que eram para fotos */
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    left: 12px; /* Ajuste para centralizar a lupa */
    width: 16px;
    height: 16px;
    pointer-events: none;
    opacity: 0.5; /* Deixa a lupa mais sutil como no design */
  }
`;

export const SearchInput = styled.input`
  width: 183px;
  height: 32px; /* Aumentamos um pouco a altura para equilibrar com o botão */
  background-color: #F2F2F2; /* Fundo cinza claro do design */
  border: none; /* Removemos a borda para ficar "flat" */
  border-radius: 10px; /* Bordas totalmente arredondadas (pílula) */
  padding: 0 12px 0 36px; /* Aumentamos o padding esquerdo para a lupa */
  font-size: 14px;
  font-family: 'Red Hat Text', sans-serif;
  color: #666D73;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: 2px solid #5D29A1; /* Opcional: destaque roxo ao clicar */
    background-color: #EDEDED;
  }
`;