import { z } from 'zod';
import { filterSorterSchema, linkShortSchema } from './zod-schemas';

export type TLinkShortSchema = z.infer<typeof linkShortSchema>;
export type TFilterSorterSchema = z.infer<typeof filterSorterSchema>;
