import mariadb from 'mariadb';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do .env

const pool = mariadb.createPool({
     host: process.env.DB_HOST || 'localhost', 
     user: process.env.DB_USER || 'root', 
     password: process.env.DB_PASSWORD || '', 
     database: process.env.DB_NAME || 'goalfy_test',
     connectionLimit: 5
});

export async function query(sql: string, params?: any[]) {
     let conn;
     try {
       conn = await pool.getConnection();
       return await conn.query(sql, params);
     } finally {
       if (conn) conn.end();
     }
}