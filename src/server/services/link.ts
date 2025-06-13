import { TReqPostLink, TResPostLink } from '@/lib/types';
import { links } from '../db/schemas';
import db from '../db/drizzle-client';
import { nanoid } from 'nanoid';

export async function createShortLink(
  args: TReqPostLink
): Promise<TResPostLink> {
  const shortLink = nanoid(15);
  const longLink = args.longLink;

  await db.insert(links).values({
    shortLink,
    longLink,
    createdAt: new Date(),
  });

  return { shortLink };
}
