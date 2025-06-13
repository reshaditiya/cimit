import { TResGetLink } from '@/lib/types';
import SectionTitle from '../common/section-title';
import { useFormatter, useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Separator } from '../ui/separator';

export function LinkCard({
  onCopyShortLink = () => {},
  onOptionsClick = () => {},
  ...link
}: TResGetLink & {
  onCopyShortLink: (shortLink?: string) => void;
  onOptionsClick: (data: TResGetLink) => void;
}) {
  const format = useFormatter();
  const t = useTranslations('link-list');
  const visibility = link.password ? 'protected' : 'public';

  return (
    <>
      <ul className="break-words whitespace-normal [&>*]:line-clamp-2">
        <li>
          <SectionTitle
            className="cursor-pointer select-none hover:underline"
            as="div"
            role="button"
            onClick={() => onCopyShortLink(link.shortLink)}
            aria-label="click to copy short link"
          >
            {link.shortLink}
          </SectionTitle>
        </li>
        <li>
          <Link href={link.longLink} className="underline">
            {link.longLink}
          </Link>
        </li>
        <li>
          created at:{' '}
          {format.dateTime(link.createdAt, {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </li>
        <li>
          expired at:{' '}
          {link.expiredAt &&
            format.dateTime(link.createdAt, {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
        </li>
        <li>
          <span>{visibility}</span> |{' '}
          <span>{format.number(link.totalVisited)} visited</span>
        </li>
      </ul>
      <div className="flex gap-4">
        <Button onClick={() => onCopyShortLink(link.shortLink)}>
          {t('copy-link-btn')}
        </Button>
        <Button variant="secondary" onClick={() => onOptionsClick(link)}>
          {t('options-btn')}
        </Button>
      </div>
      <Separator className="last:hidden" />
    </>
  );
}
