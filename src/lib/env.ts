import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    AUTH_SECRET:
      process.env.NODE_ENV === 'production'
        ? z.string()
        : z.string().optional(),
    DATABASE_URL: z.string().url(),
    XATA_BRANCH: z.string(),
    XATA_API_KEY: z.string(),
    XATA_DB_URL: z.string(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },
  client: { NEXT_PUBLIC_DOMAIN_NAME: z.string() },
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    XATA_BRANCH: process.env.XATA_BRANCH,
    XATA_API_KEY: process.env.XATA_API_KEY,
    XATA_DB_URL: process.env.XATA_DB_URL,
    NEXT_PUBLIC_DOMAIN_NAME: process.env.NEXT_PUBLIC_DOMAIN_NAME,
    NODE_ENV: process.env.NODE_ENV,
  },
  emptyStringAsUndefined: true,
});
