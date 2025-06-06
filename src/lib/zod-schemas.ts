import { z } from 'zod';
import { isAfter } from 'date-fns';

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
  orderBy: z
    .enum(['created date', 'most visited', 'expired date'])
    .default('created date')
    .optional(),
  order: z.enum(['asc', 'desc']).default('desc').optional(),
  visibility: z.enum(['all', 'public', 'protected']).default('all').optional(),
  expiry: z.enum(['all', 'active', 'expired']).default('all').optional(),
});

export const editLinkSchema = z.object({
  shortLink: z
    .string()
    .max(15, 'i thought you want a short link??')
    .nonempty('you want a short link but not a link??')
    .regex(/^[a-zA-Z0-9]+$/, 'its complicated use human letter only'),
  expiredDate: z
    .date()
    .refine((val) => isAfter(val, new Date()), {
      message: "less than now, if u don't want it delete it",
    })
    .optional(),
  password: z
    .string()
    .min(4, 'make it longer so then it is password!')
    .optional(),
});
