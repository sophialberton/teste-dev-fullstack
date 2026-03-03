import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: white;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h1 {
    font-size: 18px;
    font-weight: 400;
    color: #232426;
  }
  
  span {
    font-size: 18px;
    font-weight: 500;
    color: #232426;
    border-left: 1px solid #E8E8E8;
    padding-left: 12px;
  }
`;

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .membros {
    font-size: 14px;
    color: #666;
    background: #F2F2F2;
    padding: 4px 12px;
    border-radius: 100px;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #F2F2F2;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <Brand>
      <h1>Goalfy</h1>
      <span>Registro de Clientes</span>
    </Brand>
    <ProfileArea>
      <div className="membros">Membros (20)</div>
      <img src="https://via.placeholder.com/32" alt="Perfil" />
    </ProfileArea>
  </HeaderContainer>
);