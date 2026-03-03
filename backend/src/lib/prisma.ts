// backend/src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Não passe o objeto 'datasources' ou 'datasourceUrl' aqui se o TS estiver travando.
// O Prisma lerá a DATABASE_URL do seu arquivo .env automaticamente.
export const prisma = new PrismaClient();