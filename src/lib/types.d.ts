import { z } from 'zod/v4';
import {
  filterSorterSchema,
  linkShortSchema,
  updateLinkSchema,
} from './zod-schemas';
import { links } from '@/db/schemas';

export type TFilterSorterSchema = z.infer<typeof filterSorterSchema>;
export type TSelectLink = typeof links.$inferSelect;
export type TInsertLinkSchema = z.infer<typeof linkShortSchema>;
export type TUpdateLinkSchema = z.infer<typeof updateLinkSchema>;
