// src/repositories/CustomerRepository.ts
import { prisma } from '../lib/prisma';
import { Customer } from '../domain/entities/Customer';

export class CustomerRepository {
  async create(data: Customer) {
    return await prisma.customer.create({ data });
  }

  async listAll() {
    return await prisma.customer.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }
}