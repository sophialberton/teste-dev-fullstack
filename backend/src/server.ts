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

  const PORT = 3333;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  });
});