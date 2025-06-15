import { z } from 'zod';
import {
  reqGetLinkSchema,
  reqGetProtectedRedirectSchema,
  reqPostRedirectSchema,
  reqPostLinkSchema,
  reqUpdateLinkSchema,
  resGetLinkSchema,
  resPostMidRedirectSchema,
  resPostLinkSchema,
  resStandardMessageSchema,
} from '@/lib/zod-schemas/link';

export type ReqGetLink = z.infer<typeof reqGetLinkSchema>;
export type ReqPostLink = z.infer<typeof reqPostLinkSchema>;
export type ReqUpdateLink = z.infer<typeof reqUpdateLinkSchema>;
export type ResGetLink = z.infer<typeof resGetLinkSchema>;
export type ResPostLink = z.infer<typeof resPostLinkSchema>;
export type ReqGetProtectedRedirect = z.infer<
  typeof reqGetProtectedRedirectSchema
>;
export type ReqPostRedirect = z.infer<typeof reqPostRedirectSchema>;
export type ResPostMidRedirect = z.infer<typeof resPostMidRedirectSchema>;
export type ResStandardMessage = z.infer<typeof resStandardMessageSchema>;
