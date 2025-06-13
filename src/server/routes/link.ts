import { reqPostLinkSchema, resGetLinkSchema } from '@/lib/zod-schemas/link';
import { Hono } from 'hono';
import { describeRoute } from 'hono-openapi';
import { resolver, validator } from 'hono-openapi/zod';

const app = new Hono();

app.post(
  '/',
  describeRoute({
    description: 'post and shorten a link',
    responses: {
      200: {
        description: 'link successfully shorten',
        content: {
          'application/json': { schema: resolver(resGetLinkSchema) },
        },
      },
    },
  }),
  validator('json', reqPostLinkSchema)
);
