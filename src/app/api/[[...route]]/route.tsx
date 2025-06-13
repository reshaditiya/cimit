import appLink from '@/server/routes/link';
import { Hono } from 'hono';
import { openAPISpecs } from 'hono-openapi';
import { handle } from 'hono/vercel';
import { swaggerUI } from '@hono/swagger-ui';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

// routes
app.route('link', appLink);

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
export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
