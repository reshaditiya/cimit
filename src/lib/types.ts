import { z } from 'zod';
import { linkShortSchema } from './schemas';

export type TLinkShortSchema = z.infer<typeof linkShortSchema>;
