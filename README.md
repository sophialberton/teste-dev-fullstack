# teste-dev-fullstack
Teste para Vaga de Desenvolvedor Full Stack


Estrutura inicial:
```
/backend
├── /src
│   ├── /@types            # Definições de tipos globais
│   ├── /domain            # Camada de Domínio (O coração da aplicação)
│   │   ├── /entities      # Entidade Cliente (regras de negócio puras)
│   │   └── /repositories  # Definição das interfaces (contratos)
│   ├── /application       # Camada de Aplicação (Casos de Uso)
│   │   └── /use-cases     # Ex: CreateCustomer.ts, ListCustomers.ts
│   ├── /infrastructure    # Camada de Infraestrutura (Detalhes técnicos)
│   │   ├── /database      # Configuração do banco e Repositórios (SQL/Prisma)
│   │   └── /http          # Controllers e Rotas (Express ou Fastify)
│   └── server.ts          # Inicialização do servidor
├── package.json
└── tsconfig.json
```

---
```
/frontend
├── /src
│   ├── /assets            # Imagens e ícones
│   ├── /components        # Componentes reutilizáveis (Botões, Tabela, Modal)
│   ├── /contexts          # CustomerContext.tsx (Gerenciamento de estado)
│   ├── /hooks             # useCustomer.ts (Lógica extraída)
│   ├── /pages             # Páginas da aplicação (Ex: Dashboard/Listagem)
│   ├── /services          # Integração com a sua API e com a ViaCEP
│   ├── /styles            # GlobalStyles.ts e temas (Styled-components)
│   ├── /utils             # Validadores (E-mail, CNPJ) e formatadores
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Goalfy - Registro de Clientes

Este é um projeto Full Stack desenvolvido para o gerenciamento de registros de clientes. A aplicação utiliza uma arquitetura organizada entre camadas no backend e uma interface moderna com React no frontend.

## 🚀 Tecnologias Utilizadas

    Frontend: React, TypeScript, Vite, Styled-components, Axios, React Icons.
    Backend: Node.js, TypeScript, Express/Fastify (planejado), Prisma/SQL.

# 🛠️ Como Instalar e Rodar

Siga os passos abaixo para configurar cada parte do projeto em sua máquina.
- 1. Pré-requisitos
Certifique-se de ter o Node.js (versão 18 ou superior) instalado em seu computador.

- 2. Configurando o Frontend
Abra o terminal na pasta raiz do projeto e siga os comandos:
```
# Entre na pasta do frontend
cd frontend

# Instale as dependências necessárias
npm install

# Inicie a aplicação em modo de desenvolvimento
npm run dev
```

- 3. Configurando o Backend
(Baseado na estrutura definida no seu README inicial)
```
# Volte para a raiz e entre na pasta backend
cd ../backend
# Instale as dependências (certifique-se de que o package.json do backend existe)
npm install
# Inicie o servidor
npm run dev

npm install typescript ts-node-dev @types/node @types/express --save-dev
```
# 🌐 Como Visualizar a Página Web

Após executar o comando npm run dev na pasta frontend:
    O terminal exibirá um endereço local, geralmente http://localhost:5173.
    Abra o seu navegador (Chrome, Edge ou Firefox).
    Digite o endereço fornecido na barra de navegação.
    A página do Goalfy | Registro de Clientes deverá carregar com o tema configurado.

# 📂 Estrutura de Pastas Úteis
    /frontend/src/components: Onde ficam os componentes visuais como botões e tabelas.
    /frontend/src/contexts: Contém o CustomerContext, responsável por gerenciar a lista de clientes em toda a aplicação.
    /frontend/src/styles: Definições de cores e temas (atualmente usando o roxo #6C4BB3).
    /backend/src/domain: Local onde as regras de negócio e entidades principais devem ser implementadas.

# 📝 Observações Importantes
    Porta do Frontend: O servidor está configurado para rodar na porta 5173.
    Licença: Este projeto está sob a licença MIT.


## 🚀 Backend (Node.js + MariaDB)

### Pré-requisitos de Desenvolvimento
Para que o TypeScript reconheça os módulos corretamente, certifique-se de:
1. Instalar as tipagens de desenvolvimento: `npm install @types/express @types/cors @types/node -D`.
2. O arquivo `tsconfig.json` deve ter a flag `"esModuleInterop": true` ativada.

O serviço backend foi construído seguindo os princípios de **DDD (Domain-Driven Design)** para garantir escalabilidade e manutenção.

### Tecnologias Utilizadas
* Node.js
* MariaDB (Persistência de dados)
* Prisma ORM (Gestão de banco de dados)
* Express / Fastify (Serviço REST)

### Configuração do Banco de Dados
1. Certifique-se de ter o **MariaDB** instalado e rodando.
2. Crie um banco de dados chamado `goalfy_test`.
3. No diretório `/backend`, crie um arquivo `.env` e configure sua conexão:
   ```env
   DATABASE_URL="mysql://seu_usuario:sua_senha@localhost:3306/goalfy_test"