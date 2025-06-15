import type { ReqPostRedirect, ResPostMidRedirect } from '@/lib/types';
import db from '../db/drizzle-client';

export async function getLinkInfo(
  shortLink: ReqPostRedirect['shortLink']
): Promise<ResPostMidRedirect> {
  const data = await db.query.links.findFirst({
    columns: { password: true },
    where: (link, { eq }) => eq(link.shortLink, shortLink),
  });

  if (!data) {
    return { status: 'not found' };
  }

  if (data.password) {
    return { status: 'forbidden' };
  }

  return { status: 'ok' };
}

export async function getRedirectLink({
  shortLink,
  password,
}: ReqPostRedirect): Promise<ResPostMidRedirect> {
  const { status } = await getLinkInfo(shortLink);
  if (status === 'not found') return { status };
  if (status === 'forbidden' && password === undefined) return { status };

  const data = await db.query.links.findFirst({
    columns: { longLink: true },
    where: (link, { eq, isNull }) => {
      const shortLinkMatch = eq(link.shortLink, shortLink);
      const passwordMatch = (() => {
        if (password === undefined) return isNull(link.password);
        return eq(link.password, password);
      })();

      return shortLinkMatch && passwordMatch;
    },
  });

  if (!data) {
    return { status: 'forbidden' };
  }

  return { status: 'ok', longLink: data.longLink };
}
