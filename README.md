# Goalfy - Registro de Clientes

Este projeto é uma aplicação Full Stack desenvolvida como teste técnico para a vaga de Desenvolvedor Full Stack na Goalfy. A aplicação consiste em um sistema de gerenciamento de clientes, permitindo realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) integradas a um banco de dados persistente.

## 🚀 Tecnologias Utilizadas

### Frontend

- React (com TypeScript)
- Styled-components (para estilização)
- Context API & Hooks (gerenciamento de estado)
- Vite (ferramenta de build)
- Axios (consumo de API)
- ViaCEP API (preenchimento automático de endereço)

### Backend

- Node.js (com TypeScript)
- Express (framework HTTP)
- MariaDB (banco de dados SQL)
- Prisma ORM (planejado/integrado para gestão de banco)

## 🛠️ Instalação e Execução
1. Pré-requisitos

- Node.js instalado (v18 ou superior recomendado).
- Instância do MariaDB rodando localmente.

2. Configurando o Backend

- Acesse a pasta do backend:
    ```bash
    cd backend
    ```
- Instale as dependências:
    ```bash
    npm install
    ```
- Crie um arquivo .env na raiz da pasta /backend e configure sua conexão:
    ```Snippet de código
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=goalfy_test
    ```
- Inicie o servidor:
    ```Bash
    npm run dev
    ```
    - O servidor rodará em http://localhost:3333.

3. Configurando o Frontend

- Acesse a pasta do frontend:
    ```Bash
    cd ../frontend
    ```

- Instale as dependências:
    ```Bash
    npm install
    ```
    
- Inicie a aplicação:
    
    ```Bash
    npm run dev
    ```
    - Acesse em seu navegador: http://localhost:5173.

## 📂 Estrutura do Projeto
```
    /backend/src/domain: Entidades e regras de negócio baseadas em DDD.

    /backend/src/repositories: Implementação da persistência de dados.

    /frontend/src/contexts: Gerenciamento global dos dados dos clientes.

    /frontend/src/components: Componentes reutilizáveis como Modais, Tabelas e Botões.
```

## 🌐 Exemplos de Requisições (API)
A API REST do backend aceita as seguintes rotas:

| **Método** | **Rota**         | **Descrição**                              |
| ---------- | ---------------- | ------------------------------------------ |
| **GET**    | `/customers`     | Lista todos os clientes cadastrados.       |
| **POST**   | `/customers`     | Cria um novo registro de cliente.          |
| **PUT**    | `/customers/:id` | Atualiza os dados de um cliente existente. |
| **DELETE** | `/customers/:id` | Remove um cliente do banco de dados.       |


### Exemplo de Corpo para Criação (POST):
```JSON

{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "(47) 99999-9999",
  "cnpj": "00.000.000/0001-91",
  "address": "Rua Exemplo, 123",
  "city": "Joinville - SC"
}
```

## 📝 Observações

- O projeto utiliza o princípio de DDD (Domain-Driven Design) no backend para garantir escalabilidade.

- O frontend realiza a busca automática de endereço através da API ViaCEP ao digitar um CEP válido.

- Licença: Este projeto está sob a licença MIT.