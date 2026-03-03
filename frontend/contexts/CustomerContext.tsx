// frontend/src/contexts/CustomerContext.tsx
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
  addCustomer: (customer: Omit<Customer, 'id'>) => Promise<void>;
  fetchAddressByCep: (cep: string) => Promise<any>;
}

const CustomerContext = createContext<CustomerContextData>({} as CustomerContextData);

export const CustomerProvider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  // 1. Função para carregar dados do Backend
  const loadCustomers = async () => {
    try {
      const response = await fetch('http://localhost:3333/customers');
      if (response.ok) {
        const data = await response.json();
        setCustomers(data);
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
    }
  };

  // 2. Carregar ao montar o componente
  useEffect(() => {
    loadCustomers();
  }, []);

  // 3. Função addCustomer ajustada para o Backend
  const addCustomer = async (customerData: Omit<Customer, 'id'>) => {
    try {
      const response = await fetch('http://localhost:3333/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        await loadCustomers(); // Recarrega a lista do banco
      }
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
    }
  };

  const fetchAddressByCep = async (cep: string) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
    return await response.json();
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, fetchAddressByCep }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => useContext(CustomerContext);