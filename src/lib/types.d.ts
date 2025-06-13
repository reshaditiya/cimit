import { z } from 'zod';
import {
  reqGetLinkSchema,
  reqGetProtectedRedirectSchema,
  reqPostLinkSchema,
  reqUpdateLinkSchema,
  resGetLinkSchema,
  resPostLinkSchema,
} from '@/lib/zod-schemas/link';

export type ReqGetLink = z.infer<typeof reqGetLinkSchema>;
export type ReqPostLink = z.infer<typeof reqPostLinkSchema>;
export type ReqUpdateLink = z.infer<typeof reqUpdateLinkSchema>;
export type ResGetLink = z.infer<typeof resGetLinkSchema>;
export type ResPostLink = z.infer<typeof resPostLinkSchema>;
export type ReqGetProtectedRedirect = z.infer<typeof reqGetProtectedRedirectSchema>;