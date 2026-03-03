// src/components/Table/index.tsx
import { TableContainer, StyledTable } from './styles';
import { useCustomer } from '../../contexts/CustomerContext';

export const CustomerTable = () => {
  const { customers } = useCustomer();

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Nome do Cliente</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th>Cidade</th>
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