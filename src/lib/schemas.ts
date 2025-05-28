import { z } from 'zod';

export const linkShortSchema = z.object({
  longLink: z
    .string()
    .url({ message: 'put a link, this is a link shortner not a text editor' })
    .min(25, {
      message: 'that link seems short enough though',
    }),
});
