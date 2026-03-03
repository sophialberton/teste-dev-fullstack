// src/contexts/CustomerContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  address: string;
  city: string;
}

interface AddressData {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface CustomerContextData {
  customers: Customer[];
  addCustomer: (customer: Omit<Customer, 'id'>) => void;
  fetchAddressByCep: (cep: string) => Promise<AddressData | null>;
}

const CustomerContext = createContext<CustomerContextData>({} as CustomerContextData);

export const CustomerProvider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const addCustomer = (customerData: Omit<Customer, 'id'>) => {
    const newCustomer = { ...customerData, id: Math.random().toString(36).substr(2, 9) };
    setCustomers(prev => [newCustomer, ...prev]);
  };

  const fetchAddressByCep = async (cep: string): Promise<AddressData | null> => {
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length !== 8) return null;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json();
      
      if (data.erro) return null;
      
      return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf
      };
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      return null;
    }
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, fetchAddressByCep }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => useContext(CustomerContext);