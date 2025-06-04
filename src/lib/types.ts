import { z } from 'zod';
import { filterSorterSchema, linkShortSchema } from './zod-schemas';
import { links } from '@/server/db/schemas';

export type TLinkShortSchema = z.infer<typeof linkShortSchema>;
export type TFilterSorterSchema = z.infer<typeof filterSorterSchema>;
export type TLinkListData = Omit<
  typeof links.$inferSelect,
  'updatedAt' | 'createdBy'
>;
