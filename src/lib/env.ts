import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    XATA_BRANCH: z.string(),
    XATA_API_KEY: z.string(),
    XATA_DB_URL: z.string(),
  },
  client: { NEXT_PUBLIC_DOMAIN_NAME: z.string() },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    XATA_BRANCH: process.env.XATA_BRANCH,
    XATA_API_KEY: process.env.XATA_API_KEY,
    XATA_DB_URL: process.env.XATA_DB_URL,
    NEXT_PUBLIC_DOMAIN_NAME: process.env.NEXT_PUBLIC_DOMAIN_NAME,
  },
  emptyStringAsUndefined: true,
});
