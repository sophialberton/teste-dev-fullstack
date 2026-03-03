import { TableContainer, StyledTable, HeaderCellContent } from './styles';
import { useCustomer } from '../../contexts/CustomerContext';

// Importe seus ícones SVG aqui (exemplos de nomes)
import cursorText from '../../assets/cursor-text.svg';
import emailIcon from '../../assets/at.svg';
import phoneIcon from '../../assets/telephone.svg';
import cnpjIcon from '../../assets/card-list.svg';

export const CustomerTable = () => {
  const { customers } = useCustomer();

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
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.cnpj}</td>
              <td>{customer.address}</td>
              <td>{customer.city}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};