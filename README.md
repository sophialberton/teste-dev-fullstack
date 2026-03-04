# 🚀 Goalfy - Sistema de Registro de Clientes

Este projeto é uma aplicação **Full Stack** completa desenvolvida como teste técnico para a Goalfy. O sistema permite o gerenciamento de clientes através de uma interface moderna, integrada a um backend robusto com persistência em banco de dados SQL.

## 🛠️ Tecnologias Utilizadas

### **Frontend**

- **React** (com TypeScript)
    
- **Styled-components** (Estilização baseada em componentes)
    
- **Context API & Hooks** (Gerenciamento de estado global)
    
- **Vite** (Ferramenta de build rápida)
    
- **Axios** (Consumo de APIs)
    
- **ViaCEP API** (Preenchimento automático de endereço via CEP)
    

### **Backend**

- **Node.js** (com TypeScript)
    
- **Express** (Framework HTTP)
    
- **MariaDB** (Banco de dados relacional)
    
- **DDD (Domain-Driven Design)** (Estrutura de pastas e lógica)
    

## 📋 Pré-requisitos

Antes de iniciar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/ "null") (Versão 18 ou superior recomendada)
    
- [MariaDB](https://mariadb.org/ "null") ou MySQL rodando localmente
    
- [Git](https://git-scm.com/ "null") (para clonar o projeto)
    

## ⚙️ Guia de Configuração e Instalação

### 1. Clonando o Repositório

Abra o seu terminal e execute os comandos abaixo para baixar o projeto:

```
# Clone o repositório
git clone https://github.com/sophialberton/teste-dev-fullstack.git

# Acesse a pasta do projeto
cd teste-dev-fullstack
```

### 2. Instalação de Dependências

Você pode utilizar o comando de instalação unificada na raiz do projeto para configurar tudo de uma vez:

```
npm run install-all
```

> **Nota:** Este comando instala as dependências da raiz, do `/backend` e do `/frontend` automaticamente.

### 3. Configuração do Banco de Dados

O sistema possui uma rotina de inicialização automática de tabelas, mas o **Schema (Banco)** deve ser criado manualmente:

1. Acesse seu terminal do MariaDB/MySQL.
    
2. Execute o comando:
    
    ```
    CREATE DATABASE IF NOT EXISTS goalfy_test;
    ```
    

### 4. Variáveis de Ambiente

Na pasta `/backend`, crie um arquivo `.env` com suas credenciais:

```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=goalfy_test
```

## 🏃 Como Executar a Aplicação

Para rodar o projeto, abra dois terminais:

**Terminal 1 (Backend):**

```
cd backend
npm run dev
```

**Terminal 2 (Frontend):**

```
cd frontend
npm run dev
```

Acesse em seu navegador: `http://localhost:5173`

## 🧪 Como Testar o Projeto

Após iniciar os servidores, siga estes passos para validar a funcionalidade:

1. Acesse a URL do frontend (`http://localhost:5173`).
    
2. Clique no botão **"Novo Registro"**.
    
3. Preencha o formulário. Você pode usar estes dados de exemplo:
    
    - **Nome:** João Silva
        
    - **Email:** joao@email.com
        
    - **Telefone:** (47) 99999-9999
        
    - **CNPJ:** 00.000.000/0001-91
        
    - **CEP:** 89201-000 _(Note que o Endereço e Cidade serão preenchidos automaticamente)_.
        
4. Clique em **"Novo Registro"** para salvar.
    

## 🌐 Exemplos de Requisições (API)

Caso deseje testar a API manualmente utilizando `cURL`, Postman ou Insomnia, utilize os exemplos abaixo (URL base: `http://localhost:3333`):

### **1. Listar Clientes (GET)**

```
curl -X GET http://localhost:3333/customers
```

### **2. Criar Cliente (POST)**

```
curl -X POST http://localhost:3333/customers \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Maria Oliveira",
       "email": "maria@exemplo.com",
       "phone": "(11) 98888-7777",
       "cnpj": "12.345.678/0001-00",
       "address": "Av. Paulista, 1000",
       "city": "São Paulo - SP"
     }'
```

### **3. Atualizar Cliente (PUT)**

Substitua `{id}` pelo ID real do cliente no banco:

```
curl -X PUT http://localhost:3333/customers/{id} \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Maria Oliveira Silva",
       "city": "Campinas - SP"
     }'
```

### **4. Deletar Cliente (DELETE)**

Substitua `{id}` pelo ID real do cliente:

```
curl -X DELETE http://localhost:3333/customers/{id}
```

## 📂 Estrutura do Projeto

```
├── backend
│   ├── src
│   │   ├── domain         # Entidades e regras de negócio (DDD)
│   │   ├── repositories   # Persistência e consultas SQL
│   │   ├── controllers    # Lógica de rotas e respostas
│   │   └── lib            # Conexão e inicialização automática do banco
├── frontend
│   ├── src
│   │   ├── components     # UI (Modais, Tabelas, Botões)
│   │   ├── contexts       # Estado global (CustomerContext)
│   │   └── styles         # Temas e Estilos Globais
```

## 📝 Considerações Finais

- **Validação:** O sistema valida campos obrigatórios e formato de e-mail.
    
- **Integração:** A busca automática de CEP utiliza a API pública do ViaCEP.
    
- **Licença:** Este projeto está sob a licença MIT.
    

🚀 Desenvolvido por [Sophia Picasky Alberton]
