import { auth, AuthType } from '@/server/better-auth-client';
import { Hono } from 'hono';

const appAuth = new Hono<{ Bindings: AuthType }>({
  strict: false,
});

appAuth.on(['POST', 'GET'], '/*', (c) => {
  return auth.handler(c.req.raw);
});

export default appAuth;
