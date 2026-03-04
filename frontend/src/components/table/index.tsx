import { TableContainer, StyledTable, HeaderCellContent } from './styles';
import { useCustomer, Customer } from '../../contexts/CustomerContext'; // Importa a interface Customer
import cursorText from '../../assets/cursor-text.svg';
import emailIcon from '../../assets/at.svg';
import phoneIcon from '../../assets/telephone.svg';
import cnpjIcon from '../../assets/card-list.svg';

interface CustomerTableProps {
  customers: Customer[]; // Define que agora recebe a lista por props
}


export const CustomerTable = ({ customers }: CustomerTableProps) => {
  const { deleteCustomer } = useCustomer(); // Mantém apenas as funções de ação do contexto

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>
              <HeaderCellContent>
                <img src={cursorText} alt="" />
                <span>Nome do Cliente</span>
              </HeaderCellContent>
            </th>
            <th>
              <HeaderCellContent>
                <img src={emailIcon} alt="" />
                <span>Email</span>
              </HeaderCellContent>
            </th>
            <th>
              <HeaderCellContent>
                <img src={phoneIcon} alt="" />
                <span>Telefone</span>
              </HeaderCellContent>
            </th>
            <th>
              <HeaderCellContent>
                <img src={cnpjIcon} alt="" />
                <span>CNPJ</span>
              </HeaderCellContent>
            </th>
            <th>
              <HeaderCellContent>
                <img src={cursorText} alt="" />
                <span>Endereço</span>
              </HeaderCellContent>
            </th>
            <th>
              <HeaderCellContent>
                <img src={cursorText} alt="" />
                <span>Cidade</span>
              </HeaderCellContent>
            </th>
            <th>Ações</th> {/* Adicionado cabeçalho para o botão */}
          </tr>
        </thead>
        <tbody>
          {/* Se a lista estiver vazia, mostramos um aviso visual */}
          {customers.length === 0 ? (
            <tr>
              <td colSpan={7} style={{ textAlign: 'center', padding: '20px' }}>
                Nenhum cliente encontrado no MariaDB.
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.cnpj}</td>
                <td>{customer.address}</td>
                <td>{customer.city}</td>
                <td>
                  <button 
                    onClick={() => deleteCustomer(customer.id)}
                    style={{ background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '5px 10px' }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};