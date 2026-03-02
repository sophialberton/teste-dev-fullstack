// src/contexts/CustomerContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Customer {
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
  addCustomer: (customer: Customer) => void;
}

const CustomerContext = createContext<CustomerContextData>({} as CustomerContextData);

export const CustomerProvider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const addCustomer = (customer: Customer) => {
    setCustomers(prev => [...prev, customer]);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => useContext(CustomerContext);