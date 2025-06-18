import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { env } from '../lib/env';
import db from '@/server/db/drizzle-client';
import { getAllowedOriginCors } from '@/lib/utils';
import { anonymous, openAPI } from 'better-auth/plugins';

export const auth = betterAuth({
  plugins: [openAPI(), anonymous()],
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  trustedOrigins: getAllowedOriginCors(),
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
});

export type AuthType = {
  user: typeof auth.$Infer.Session.user | null;
  session: typeof auth.$Infer.Session.session | null;
};
