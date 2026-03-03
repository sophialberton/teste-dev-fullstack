import styled from 'styled-components';
import registroIcon from '../../assets/icon-registro.svg';
import personIcon from '../../assets/person.svg';
import personPerfil from '../../assets/foto-perfil-goalfy.jpg';

const HeaderContainer = styled.header`
  width: 100%;
  height: 64px; // Altura padrão aproximada do header
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px; // left: 24px do Goalfy
  background: white;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  position: fixed; // Mantém o header no topo
  top: 0;
  z-index: 100;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const GoalfyLogo = styled.h1`
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #232426;
  margin-right: 12px; // Espaçamento até a divisória
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #E8E8E8;
  margin-right: 12px; // Espaçamento até o novo ícone
`;

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; // Espaçamento entre o ícone e o texto "Registro de Clientes"

  img {
    width: 20px; // Ajuste o tamanho do ícone conforme necessário
    height: 20px;
  }

  span {
    font-family: 'Red Hat Text', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #232426;
  }
`;

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  /* Controla o espaço geral entre os blocos (Icone+Texto | Divisória | Avatar) */
  gap: 12px; 

  .membros-container {
    display: flex;
    align-items: center;
    gap: 4px; /* Este gap menor aproxima o ícone de pessoa do texto "Membros" */
  }

  .person-icon {
    width: 20px;
    height: 20px;
  }

  .membros {
    font-size: 14px;
    color: #666;
    font-family: 'Red Hat Text', sans-serif;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #F2F2F2;
    object-fit: cover;
    object-position: 90% 10%;
  }
`;

// Componente para a barra vertical |
const VerticalDivider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #E8E8E8; /* Mesma cor usada entre Goalfy e Registro */
`;

export const Header = () => (
  <HeaderContainer>
    <LeftSection>
      <GoalfyLogo>Goalfy</GoalfyLogo>
      <Divider />
      <TitleArea>
        <img src={registroIcon} alt="Ícone de Registro" />
        <span>Registro de Clientes</span>
      </TitleArea>
    </LeftSection>
   <ProfileArea>
  {/* Agrupamos o ícone e o texto para ficarem bem próximos pelo gap: 4px */}
  <div className="membros-container">
    <img src={personIcon} alt="Ícone de Pessoa" className="person-icon" />
    <div className="membros">Membros (20)</div>
  </div>

  {/* Barra vertical separadora */}
  <VerticalDivider />

  {/* Foto de perfil */}
  <img 
    src={personPerfil}
    alt="perfil" 
    className="avatar" 
  />
</ProfileArea>
  </HeaderContainer>
);