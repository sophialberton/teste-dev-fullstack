import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  address: string;
  city: string;
}
interface CustomerContextData {
  customers: Customer[];
  addCustomer: (customerData: Omit<Customer, 'id'>) => Promise<void>;
  updateCustomer: (id: string, data: Partial<Customer>) => Promise<void>; // Aproveita e adiciona esta também
  deleteCustomer: (id: string) => Promise<void>; // <-- ADICIONA ESTA LINHA
  fetchAddressByCep: (cep: string) => Promise<any>;
}
const CustomerContext = createContext<CustomerContextData>({} as CustomerContextData);

export const CustomerProvider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  // 1. Carregar dados do MariaDB
  const loadCustomers = async () => {
    try {
      const response = await fetch('http://localhost:3333/customers');
      if (response.ok) {
        const data = await response.json();
        setCustomers(data);
      }
    } catch (error) {
      console.error("Erro ao carregar clientes do banco:", error);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  // 2. Criar novo cliente no banco
  const addCustomer = async (customerData: Omit<Customer, 'id'>) => {
    try {
      const response = await fetch('http://localhost:3333/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        await loadCustomers(); // Recarrega a lista atualizada
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  // 3. Deletar cliente
  const deleteCustomer = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3333/customers/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCustomers((prev) => prev.filter(c => c.id !== id));
      }
    } catch (error) {
      console.error("Erro ao deletar:", error);
    }
  };

  // 4. Atualizar cliente
  const updateCustomer = async (id: string, data: Partial<Customer>) => {
    try {
      const response = await fetch(`http://localhost:3333/customers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        await loadCustomers();
      }
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  };

  const fetchAddressByCep = async (cep: string) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
    return await response.json();
  };

  return (
  <CustomerContext.Provider value={{ 
    customers, 
    addCustomer, 
    updateCustomer, 
    deleteCustomer,
    fetchAddressByCep 
  }}>
    {children}
  </CustomerContext.Provider>
);
};

export const useCustomer = () => useContext(CustomerContext);