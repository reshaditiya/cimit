import { auth, AuthType } from '@/server/better-auth-client';
import { Hono } from 'hono';

const appAuth = new Hono<{ Variables: AuthType }>({
  strict: false,
});

appAuth.use('*', async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session) {
    c.set('user', null);
    c.set('session', null);
    return next();
  }

  c.set('user', session.user);
  c.set('session', session.session);
  return next();
});

appAuth.on(['POST', 'GET'], '*', (c) => {
  return auth.handler(c.req.raw);
});

export default appAuth;
