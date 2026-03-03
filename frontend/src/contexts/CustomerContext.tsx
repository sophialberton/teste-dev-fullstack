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

interface CustomerContextData {
  customers: Customer[];
  addCustomer: (customer: Omit<Customer, 'id'>) => void;
}

const CustomerContext = createContext<CustomerContextData>({} as CustomerContextData);

export const CustomerProvider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const addCustomer = (customerData: Omit<Customer, 'id'>) => {
    const newCustomer = { ...customerData, id: Math.random().toString(36) };
    setCustomers(prev => [newCustomer, ...prev]);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => useContext(CustomerContext);