import { query } from '../lib/db';
import { Customer } from '../domain/entities/Customer';

export class CustomerRepository {
  async create(data: Omit<Customer, 'id'>) {
    const sql = `INSERT INTO customer (name, email, phone, cnpj, address, city) VALUES (?, ?, ?, ?, ?, ?)`;
    const params = [data.name, data.email, data.phone, data.cnpj, data.address, data.city];
    const result = await query(sql, params);
    return { id: String(result.insertId), ...data };
  }

    async listAll() {
    const rows = await query('SELECT * FROM customer ORDER BY id DESC');
    return rows.map((row: any) => ({
        ...row,
        id: String(row.id)
    }));
    }

  async update(id: string, data: Partial<Customer>) {
    const sql = `UPDATE customer SET name = ?, email = ?, phone = ?, cnpj = ?, address = ?, city = ? WHERE id = ?`;
    const params = [data.name, data.email, data.phone, data.cnpj, data.address, data.city, id];
    return await query(sql, params);
  }

  async delete(id: string) {
    return await query('DELETE FROM customer WHERE id = ?', [id]);
  }
}