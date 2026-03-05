import { Request, Response } from 'express';
import { CustomerRepository } from '../repositories/CustomerRepository';

const repository = new CustomerRepository();

export class CustomerController {
  async index(req: Request, res: Response) {
    try {
      const customers = await repository.listAll();
      return res.json(customers);
    } catch (error) {
      console.error('Erro ao listar:', error);
      return res.status(500).json({ error: 'Erro interno ao buscar a lista de clientes.' });
    }
  }

  async create(req: Request, res: Response) {
    try {
      // Validação simples de presença de campos obrigatórios
      const { name, email, cnpj, address, city } = req.body;
      if (!name || !email || !cnpj || !address || !city) {
        return res.status(400).json({ error: 'Campos obrigatórios ausentes no cadastro.' });
      }

      const customer = await repository.create(req.body);
      return res.status(201).json(customer);
    } catch (error: any) {
      console.error('Erro no cadastro:', error);

      // Tratamento específico para o erro de duplicidade que vimos no log
      if (error.code === 'ER_DUP_ENTRY') {
        const field = error.sqlMessage.includes('cnpj') ? 'CNPJ' : 'E-mail';
        return res.status(409).json({ error: `Este ${field} já está cadastrado.` });
      }

      return res.status(400).json({ error: 'Falha ao processar o cadastro do cliente.' });
    }
  }

async update(req: Request, res: Response) {
    try {
      // Desestruturação direta do parâmetro ID
      const { id } = req.params;

      // Verificação de segurança para o TypeScript
      if (typeof id !== 'string') {
        return res.status(400).json({ error: 'ID inválido.' });
      }

      await repository.update(id, req.body);
      return res.json({ message: 'Cliente atualizado com sucesso' });
    } catch (error: any) {
      console.error('Erro na atualização:', error);
      return res.status(400).json({ error: 'Erro ao atualizar cliente.' });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (typeof id !== 'string') {
        return res.status(400).json({ error: 'ID inválido.' });
      }

      await repository.delete(id);
      return res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar:', error);
      return res.status(400).json({ error: 'Erro ao deletar cliente.' });
    }
  }
}