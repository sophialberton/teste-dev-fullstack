import { Request, Response } from 'express';
import { CustomerRepository } from '../repositories/CustomerRepository';

const repository = new CustomerRepository();

export class CustomerController {
  async index(req: Request, res: Response) {
    try {
      const customers = await repository.listAll();
      // Garanta que estamos enviando apenas o array de dados
      return res.json(customers);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar clientes.' });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const customer = await repository.create(req.body);
      // O front precisa receber o objeto criado com o ID
      return res.status(201).json(customer);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: 'Erro ao cadastrar cliente.' });
    }
  }
  async update(req: Request, res: Response) {
    try {
      // Use o 'as string' para garantir ao TS que o ID é uma string
      const id = req.params.id as string; 
      await repository.update(id, req.body);
      return res.json({ message: 'Cliente atualizado com sucesso' });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar cliente.' });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id as string; // Mesma correção aqui
      await repository.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar cliente.' });
    }
  }
}