import { query } from '../lib/db';
import { Customer } from '../domain/entities/Customer';

export class CustomerRepository {
  async create(data: Omit<Customer, 'id'>) {
    const sql = `
      INSERT INTO Customer (name, email, phone, cnpj, address, city) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [data.name, data.email, data.phone, data.cnpj, data.address, data.city];
    const result = await query(sql, params);
    
    return { id: result.insertId.toString(), ...data };
  }

  async listAll() {
    return await query('SELECT * FROM Customer ORDER BY id DESC');
  }

  async delete(id: string) {
    return await query('DELETE FROM Customer WHERE id = ?', [id]);
  }
}