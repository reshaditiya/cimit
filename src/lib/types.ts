import { z } from 'zod';
import {
  editLinkSchema,
  filterSorterSchema,
  linkShortSchema,
} from './zod-schemas';
import { links } from '@/server/db/schemas';

export type TLinkShortSchema = z.infer<typeof linkShortSchema>;
export type TFilterSorterSchema = z.infer<typeof filterSorterSchema>;
export type TLinkListData = Omit<
  typeof links.$inferSelect,
  'updatedAt' | 'createdBy'
>;
export type TEditLinkSchema = z.infer<typeof editLinkSchema>;
