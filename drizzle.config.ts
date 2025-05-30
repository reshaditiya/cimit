import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schemas.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.XATA_PG_URL!,
  },
});
