import type { ReqPostLink, ResPostLink } from '@/lib/types';
import { links } from '../db/schemas';
import db from '../db/drizzle-client';
import { nanoid } from 'nanoid';
import { addDays } from 'date-fns';

export async function createShortLink(args: ReqPostLink): Promise<ResPostLink> {
  const shortLink = nanoid(15);
  const expiredAt = addDays(new Date(), 7);
  const longLink = args.longLink;

  await db.insert(links).values({
    shortLink,
    longLink,
    createdAt: new Date(),
    expiredAt: expiredAt,
  });

  return { shortLink, expiredAt };
}
