import { defineConfig } from 'drizzle-kit';
import { env } from '@/lib/env';

export default defineConfig({
  out: './drizzle',
  schema: './src/server/db/schemas.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
