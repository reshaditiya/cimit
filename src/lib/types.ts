import { z } from 'zod/v4';
import { filterSorterSchema, linkShortSchema } from './schemas';

export type TLinkShortSchema = z.infer<typeof linkShortSchema>;
export type TFilterSorterSchema = z.infer<typeof filterSorterSchema>;
