// frontend/src/contexts/CustomerContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Defina a interface para o TypeScript reconhecer 'Customer'
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
  fetchAddressByCep: (cep: string) => Promise<any>;
}

const CustomerContext = createContext<CustomerContextData>({} as CustomerContextData);

export const CustomerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>([]); // 2. Define o setCustomers aqui

  // Carrega os clientes do backend ao iniciar
  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3333/customers');
        if (response.ok) {
          const data = await response.json();
          setCustomers(data);
        }
      } catch (error) {
        console.error("Erro ao carregar clientes:", error);
      }
    };
    loadCustomers();
  }, []);
  // Função para buscar o endereço (API CEP)
  const fetchAddressByCep = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar CEP", error);
    }
  };

  // 3. Função addCustomer corrigida e dentro do Provider
  const addCustomer = async (customerData: Omit<Customer, 'id'>) => {
    try {
      const response = await fetch('http://localhost:3333/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        const savedCustomer = await response.json();
        setCustomers((prev: Customer[]) => [savedCustomer, ...prev]); // Tipagem 'prev' corrigida
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
    }
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, fetchAddressByCep }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => useContext(CustomerContext);