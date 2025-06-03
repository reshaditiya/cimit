import { createTRPCRouter, publicProcedure } from '../trpc';

export const linkRouter = createTRPCRouter({
  shortLink: publicProcedure.query(() => 'test'),
});
