import { z } from 'zod/v4';
import { isAfter } from 'date-fns';
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
import { links } from '@/db/schemas';

export const insertLinkSchema = createInsertSchema(links, {
  longLink: (z) =>
    z
      .url({ message: 'put a link, this is a link shortner not a text editor' })
      .min(25, {
        message: 'that link seems short enough though',
      }),
});

export const updateLinkSchema = createUpdateSchema(links, {
  shortLink: (z) =>
    z
      .max(15, 'i thought you want a short link??')
      .nonempty('you want a short link but not a link??')
      .regex(/^[a-zA-Z0-9]+$/, 'its complicated use human letter only'),
  expiredAt: (z) =>
    z
      .refine((val) => isAfter(val, new Date()), {
        message: "less than now, if u don't want it delete it",
      })
      .optional(),
  password: (z) =>
    z.min(4, 'make it longer so then it is password!').optional(),
});

export const filterSorterSchema = z.object({
  search: z.string().optional(),
  orderBy: z
    .enum(['created date', 'most visited', 'expired date'])
    .default('created date')
    .optional(),
  order: z.enum(['asc', 'desc']).default('desc').optional(),
  visibility: z.enum(['all', 'public', 'protected']).default('all').optional(),
  expiry: z.enum(['all', 'active', 'expired']).default('all').optional(),
});
