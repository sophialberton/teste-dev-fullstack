// frontend/src/contexts/CustomerContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Customer {
  id: string; // O MariaDB retorna como número, mas converteremos para string no front
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
  updateCustomer: (id: string, customerData: Partial<Customer>) => Promise<void>;
  deleteCustomer: (id: string) => Promise<void>;
  fetchAddressByCep: (cep: string) => Promise<any>;
}

const CustomerContext = createContext<CustomerContextData>({} as CustomerContextData);

export const CustomerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  // Função centralizada para carregar dados do MariaDB
  const loadCustomers = async () => {
    try {
      const response = await fetch('http://localhost:3333/customers');
      if (response.ok) {
        const data = await response.json();
        console.log("Dados recebidos do banco:", data);
        setCustomers(data);
      }
    } catch (error) {
      console.error("Erro ao carregar clientes do banco:", error);
    }
  };

  // Carrega ao iniciar o App
  useEffect(() => {
    loadCustomers();
  }, []);

  const fetchAddressByCep = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar CEP", error);
    }
  };

  // CREATE - Salva no MariaDB e atualiza a lista
  const addCustomer = async (customerData: Omit<Customer, 'id'>) => {
    try {
      const response = await fetch('http://localhost:3333/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        // Recarregar a lista garante que pegamos o ID gerado pelo AUTO_INCREMENT
        await loadCustomers();
      }
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
    }
  };

  // UPDATE - Atualiza no MariaDB
  const updateCustomer = async (id: string, customerData: Partial<Customer>) => {
    try {
      const response = await fetch(`http://localhost:3333/customers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        await loadCustomers();
      }
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
    }
  };

  // DELETE - Remove do MariaDB
  const deleteCustomer = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3333/customers/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Filtra localmente para resposta instantânea na UI
        setCustomers((prev) => prev.filter(customer => customer.id !== id));
      }
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
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