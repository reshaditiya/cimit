import appLink from '@/server/routes/link';
import { Hono } from 'hono';
import { openAPISpecs } from 'hono-openapi';
import { handle } from 'hono/vercel';
import { swaggerUI } from '@hono/swagger-ui';
import appRedirect from '@/server/routes/redirect';
import appAuth from '@/server/routes/auth';
import { cors } from 'hono/cors';
import { getAllowedOriginCors } from '@/lib/utils';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

// config
app.use(
  '*',
  cors({
    origin: getAllowedOriginCors(),
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['POST', 'GET', 'OPTIONS', 'PATCH', 'PUT'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,
  })
);

// routes
app.route('link', appLink);
app.route('redirect', appRedirect);
app.route('auth', appAuth);

// docs
app.get(
  '/json',
  openAPISpecs(app, {
    documentation: {
      info: {
        title: 'Cimit API',
        version: '1.0.0',
      },
    },
  })
);
app.get('/ui', swaggerUI({ url: '/api/json' }));

export default app;
const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
