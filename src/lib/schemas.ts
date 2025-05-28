import { z } from 'zod';

export const linkShortSchema = z.object({
  longLink: z
    .string()
    .url({ message: 'put a link, this is a link shortner not a text editor' })
    .min(25, {
      message: 'that link seems short enough though',
    }),
});

export const filterSorterSchema = z.object({
  search: z.string().optional(),
  orderBy: z.enum(['created date', 'most visited', 'expired date']),
  order: z.enum(['asc', 'desc']),
  visibility: z.enum(['all', 'public', 'protected']),
  expiry: z.enum(['all', 'active', 'expired']),
});
