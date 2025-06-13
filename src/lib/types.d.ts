import { z } from 'zod';
import {
  reqGetLinkSchema,
  reqPostLinkSchema,
  reqUpdateLinkSchema,
  resGetLinkSchema,
  resPostLinkSchema,
} from '@/lib/zod-schemas/link';

export type TReqGetLink = z.infer<typeof reqGetLinkSchema>;
export type TReqPostLink = z.infer<typeof reqPostLinkSchema>;
export type TReqUpdateLink = z.infer<typeof reqUpdateLinkSchema>;
export type TResGetLink = z.infer<typeof resGetLinkSchema>;
export type TResPostLink = z.infer<typeof resPostLinkSchema>;
