// backend/src/server.ts
import express from 'express';
import cors from 'cors';
import { CustomerController } from './controllers/CustomerController';
import { initializeDatabase } from './lib/initDb'; // Importe a função

const app = express();
const customerController = new CustomerController();

app.use(cors());
app.use(express.json());

// Inicializa o banco antes de subir o servidor
initializeDatabase().then(() => {
  // Rotas
    app.get('/customers', customerController.index);
    app.post('/customers', customerController.create);
    app.put('/customers/:id', customerController.update); 
    app.delete('/customers/:id', customerController.delete);

  const PORT = 3333;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  });
});

const start = async () => {
  try {
    await initializeDatabase(); // Isso DEVE rodar antes do app.listen
    console.log('✅ Banco de dados inicializado');
    
    app.listen(3333, () => {
      console.log('🚀 Servidor rodando em http://localhost:3333');
    });
  } catch (error) {
    console.error('❌ Falha ao iniciar o servidor:', error);
  }
};

start();