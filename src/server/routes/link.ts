import { reqPostLinkSchema, resPostLinkSchema } from '@/lib/zod-schemas/link';
import { Hono } from 'hono';
import { describeRoute } from 'hono-openapi';
import { resolver, validator } from 'hono-openapi/zod';
import { createShortLink } from '../services/link';
import status from 'http-status';

const appLink = new Hono();

appLink.post(
  '/',
  describeRoute({
    tags: ['link'],
    description: 'post and shorten a link',
    responses: {
      [status.OK]: {
        description: 'link successfully shorten',
        content: {
          'application/json': { schema: resolver(resPostLinkSchema) },
        },
      },
    },
    validateResponse: true,
  }),
  validator('json', reqPostLinkSchema),
  async (c) => {
    const { longLink } = await c.req.json();
    const res = await createShortLink({ longLink });

    return c.json(res);
  }
);

export default appLink;
