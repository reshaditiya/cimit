import { createAuthClient } from 'better-auth/react';
import { inferAdditionalFields } from 'better-auth/client/plugins';
import { auth } from '@/server/better-auth-client';
import { env } from './env';

export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>()],
  basePath: '/api/auth',
  baseURL: env.NEXT_PUBLIC_BACKEND_URL,
});
export const {
  useSession,
  signIn,
  signUp,
  signOut,
  forgetPassword,
  resetPassword,
} = authClient;

export type Session = typeof authClient.$Infer.Session;
export type User = typeof authClient.$Infer.Session.user;
