// src/controllers/CustomerController.ts
import { Request, Response } from 'express';
import { CustomerRepository } from '../repositories/CustomerRepository';

const repository = new CustomerRepository();

export class CustomerController {
  async create(req: Request, res: Response) {
    try {
      const customer = await repository.create(req.body);
      return res.status(201).json(customer);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao cadastrar cliente. Verifique se o e-mail ou CNPJ já existem.' });
    }
  }

  async index(req: Request, res: Response) {
    const customers = await repository.listAll();
    return res.json(customers);
  }
}