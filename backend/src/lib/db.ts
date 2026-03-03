import mariadb from 'mariadb';

const pool = mariadb.createPool({
     host: 'localhost', 
     user: 'root', 
     password: '', 
     database: 'goalfy_test',
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