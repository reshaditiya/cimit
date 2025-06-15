import {
  reqPostRedirectSchema,
  resPostMidRedirectSchema,
  resStandardMessageSchema,
} from '@/lib/zod-schemas/link';
import { Hono } from 'hono';
import { describeRoute } from 'hono-openapi';
import { resolver, validator } from 'hono-openapi/zod';
import { status } from 'http-status';
import { getRedirectLink } from '../services/redirect';
import type { ReqPostRedirect } from '@/lib/types';

const appRedirect = new Hono();

appRedirect.post(
  '/',
  describeRoute({
    tags: ['redirect'],
    description: 'redirect to the original link',
    responses: {
      [status.OK]: {
        description: 'give the original link',
        content: {
          'application/json': {
            schema: resolver(
              resPostMidRedirectSchema
                .omit({ status: true })
                .required({ longLink: true })
            ),
          },
        },
      },
      [status.FORBIDDEN]: {
        description: 'link is password protected',
        content: {
          'application/json': {
            schema: resolver(resStandardMessageSchema),
          },
        },
      },
      [status.NOT_FOUND]: {
        description: 'link not found',
        content: {
          'application/json': {
            schema: resolver(resStandardMessageSchema),
          },
        },
      },
    },
    validateResponse: true,
  }),
  validator('json', reqPostRedirectSchema),
  async (c) => {
    const param = (await c.req.json()) as ReqPostRedirect;
    const { status: statusData, longLink } = await getRedirectLink(param);

    if (statusData === 'not found') {
      return c.json({ message: 'link not found' }, status.NOT_FOUND);
    }

    if (statusData === 'forbidden') {
      return c.json(
        { message: 'link is password protected' },
        status.FORBIDDEN
      );
    }

    return c.json({ longLink }, status.OK);
  }
);

export default appRedirect;
