import { LinkCard } from './link-card';
import { CircleHelp, VenetianMask } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CardState } from '../common/card-state';
import type { ResGetLink } from '@/lib/types';
import CardContainer from '../common/card-container';

export default function LinkList({
  data = [],
  isLogin = false,
  onShortLinkClick = () => {},
  onOptionsClick = () => {},
}: {
  data: ResGetLink[];
  isLogin: boolean;
  onShortLinkClick: () => void;
  onOptionsClick: () => void;
}) {
  const t = useTranslations('link-list');

  if (!isLogin) {
    return (
      <CardState
        icon={VenetianMask}
        title={t('title-anonymous')}
        description={t('description-anonymous')}
      />
    );
  }

  if (data.length === 0) {
    return (
      <CardState
        icon={CircleHelp}
        title={t('title-empty')}
        description={t('description-empty')}
      />
    );
  }

  return (
    <CardContainer className="flex flex-col gap-4">
      {data.map((linkData) => (
        <LinkCard
          key={linkData.shortLink}
          onCopyShortLink={onShortLinkClick}
          onOptionsClick={onOptionsClick}
          {...linkData}
        />
      ))}
    </CardContainer>
  );
}
