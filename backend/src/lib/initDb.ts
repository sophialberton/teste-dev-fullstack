// backend/src/lib/initDb.ts
import { query } from './db';

export async function initializeDatabase() {
  try {
    // 1. Criar a tabela caso não exista
    // Nota: O banco 'goalfy_test' já deve estar na sua string de conexão no pool
    const createTableSql = `
      CREATE TABLE IF NOT EXISTS Customer (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone VARCHAR(20),
        cnpj VARCHAR(20) NOT NULL UNIQUE,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await query(createTableSql);
    console.log('✅ Verificação do banco de dados concluída (Tabela Customer pronta).');
  } catch (error) {
    console.error('❌ Erro ao inicializar o banco de dados:', error);
    process.exit(1); // Para o servidor se não conseguir garantir a estrutura do banco
  }
}