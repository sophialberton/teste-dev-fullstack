# teste-dev-fullstack
Teste para Vaga de Desenvolvedor Full Stack


Estrutura inicial:

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


---

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